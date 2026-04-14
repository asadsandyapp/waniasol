import { SubmissionsDashboard } from "@/app/response/submissions-dashboard";
import { ResponseLoginForm } from "@/app/response/login-form";
import { getSubmissions } from "@/lib/contact-storage";
import { verifyResponseSession } from "@/lib/response-auth";
import type { Metadata } from "next";

/** Session + submissions must not be statically cached. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact submissions",
  description: "Internal view of contact form leads.",
  robots: { index: false, follow: false },
};

export default async function ResponsePage() {
  const authed = await verifyResponseSession();

  if (!authed) {
    return (
      <div className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-0.5 sm:px-1 lg:px-1.5">
          <ResponseLoginForm />
        </div>
      </div>
    );
  }

  const submissions = await getSubmissions();

  return (
    <div className="border-b border-border/60 bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-0.5 sm:px-1 lg:px-1.5">
        <SubmissionsDashboard submissions={submissions} />
      </div>
    </div>
  );
}
