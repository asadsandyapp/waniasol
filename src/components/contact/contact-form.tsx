"use client";

import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import type { ContactFormValues } from "@/lib/contact";
import { contactSchema } from "@/lib/contact";
import { fieldClassName } from "@/lib/field-classes";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const selectChevron =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1 text-xs font-semibold text-red-600 dark:text-red-400">
      {message}
    </p>
  );
}

function FormLabel({
  children,
  htmlFor,
}: {
  children: ReactNode;
  htmlFor?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-semibold text-foreground">
      {children}
    </label>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "Real Estate Management & Sales CRM",
      businessGoals: "",
      expectedTimeline: "Short term (1-3 months)",
      engagementModel: "Discovery + Delivery",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    setServerMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          message?: string;
        } | null;
        throw new Error(data?.message ?? "Request failed. Please try again.");
      }

      setStatus("success");
      setServerMessage(
        "Thanks! Your request has been received. We’ll get back to you within 24 hours.",
      );
      reset();
    } catch (e) {
      setStatus("error");
      setServerMessage(
        e instanceof Error ? e.message : "Request failed. Please try again.",
      );
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-5">
      <Reveal>
        <div
          id="contact-form"
          className="rounded-2xl border border-border/75 bg-card/45 p-6 shadow-[0_10px_40px_-28px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8"
        >
          <div className="grid gap-4 lg:grid-cols-12 lg:items-start lg:gap-5">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Business inquiries
              </p>
              <h2 className="mt-3 text-balance font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Project details
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Prefer email communication? Reach us at{" "}
                <a
                  href="mailto:info@waniasol.com"
                  className="font-semibold text-foreground underline-offset-4 hover:underline"
                >
                  info@waniasol.com
                </a>
                . You can also submit your brief here.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <Link
                  href="/product"
                  className="inline-flex items-center rounded-lg border border-border bg-card/60 px-3 py-1.5 text-xs font-semibold text-foreground transition hover:bg-card"
                >
                  Product overview
                </Link>
              </p>
            </div>

            <div className="lg:col-span-7">
              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-5 sm:gap-3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <FormLabel htmlFor="contact-name">Name</FormLabel>
                    <input
                      id="contact-name"
                      className={cn(fieldClassName(!!errors.name), "mt-2")}
                      placeholder="Your name"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      {...register("name")}
                    />
                    <FieldError message={errors.name?.message} />
                  </div>

                  <div>
                    <FormLabel htmlFor="contact-email">Email</FormLabel>
                    <input
                      id="contact-email"
                      type="email"
                      className={cn(fieldClassName(!!errors.email), "mt-2")}
                      placeholder="name@company.com"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    <FieldError message={errors.email?.message} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <FormLabel htmlFor="contact-phone">Phone</FormLabel>
                    <input
                      id="contact-phone"
                      type="tel"
                      className={cn(fieldClassName(!!errors.phone), "mt-2")}
                      placeholder="+1 (555) 000-0000"
                      autoComplete="tel"
                      aria-invalid={!!errors.phone}
                      {...register("phone")}
                    />
                    <FieldError message={errors.phone?.message} />
                  </div>

                  <div>
                    <FormLabel htmlFor="contact-project">Project type</FormLabel>
                    <select
                      id="contact-project"
                      className={cn(
                        fieldClassName(!!errors.projectType),
                        "mt-2 appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat",
                      )}
                      style={{ backgroundImage: selectChevron }}
                      aria-invalid={!!errors.projectType}
                      {...register("projectType")}
                    >
                      <option>Real Estate Management & Sales CRM</option>
                      <option>SaaS Product</option>
                      <option>AI & Data Solutions</option>
                      <option>DevOps & Cloud</option>
                      <option>AI Agentic Solutions</option>
                      <option>Vibe Coding</option>
                      <option>Custom Software</option>
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>Game Development</option>
                      <option>Enterprise Solutions</option>
                    </select>
                    <FieldError message={errors.projectType?.message} />
                  </div>
                </div>

                <div>
                  <FormLabel htmlFor="contact-goals">Business goals</FormLabel>
                  <textarea
                    id="contact-goals"
                    className={cn(
                      fieldClassName(!!errors.businessGoals),
                      "mt-2 min-h-[120px] resize-y",
                    )}
                    rows={4}
                    placeholder="What do you want to achieve, and how will you measure success?"
                    aria-invalid={!!errors.businessGoals}
                    {...register("businessGoals")}
                  />
                  <FieldError message={errors.businessGoals?.message} />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <FormLabel htmlFor="contact-timeline">
                      Expected timeline
                    </FormLabel>
                    <select
                      id="contact-timeline"
                      className={cn(
                        fieldClassName(!!errors.expectedTimeline),
                        "mt-2 appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat",
                      )}
                      style={{ backgroundImage: selectChevron }}
                      aria-invalid={!!errors.expectedTimeline}
                      {...register("expectedTimeline")}
                    >
                      <option>ASAP (0-1 months)</option>
                      <option>Short term (1-3 months)</option>
                      <option>Mid term (3-6 months)</option>
                      <option>Long term (6+ months)</option>
                    </select>
                    <FieldError message={errors.expectedTimeline?.message} />
                  </div>

                  <div>
                    <FormLabel htmlFor="contact-engagement">
                      Engagement model
                    </FormLabel>
                    <select
                      id="contact-engagement"
                      className={cn(
                        fieldClassName(!!errors.engagementModel),
                        "mt-2 appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat",
                      )}
                      style={{ backgroundImage: selectChevron }}
                      aria-invalid={!!errors.engagementModel}
                      {...register("engagementModel")}
                    >
                      <option>Fixed scope</option>
                      <option>Time & Materials</option>
                      <option>Dedicated Team</option>
                      <option>Discovery + Delivery</option>
                    </select>
                    <FieldError message={errors.engagementModel?.message} />
                  </div>
                </div>

                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold text-muted">
                      {status === "submitting" ? "Sending request..." : null}
                    </p>
                    {serverMessage ? (
                      <motion.p
                        className={cn(
                          "mt-2 text-sm font-semibold",
                          status === "error"
                            ? "text-red-600 dark:text-red-400"
                            : "text-emerald-600 dark:text-emerald-400",
                        )}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        role={status === "error" ? "alert" : "status"}
                      >
                        {serverMessage}
                      </motion.p>
                    ) : null}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={status === "submitting"}
                    className="disabled:opacity-60"
                  >
                    {status === "submitting" ? "Submitting..." : "Submit Request"}
                  </Button>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
