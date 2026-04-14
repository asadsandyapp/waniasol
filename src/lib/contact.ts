import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(3, "Please enter a valid phone number."),
  projectType: z.enum([
    "Real Estate Management & Sales CRM",
    "SaaS Product",
    "AI & Data Solutions",
    "DevOps & Cloud",
    "AI Agentic Solutions",
    "Vibe Coding",
    "Custom Software",
    "Web Development",
    "Mobile App",
    "Game Development",
    "Enterprise Solutions",

  ]),
  businessGoals: z.string().min(10, "Please describe your business goals."),
  expectedTimeline: z.enum([
    "ASAP (0-1 months)",
    "Short term (1-3 months)",
    "Mid term (3-6 months)",
    "Long term (6+ months)",
  ]),
  engagementModel: z.enum([
    "Fixed scope",
    "Time & Materials",
    "Dedicated Team",
    "Discovery + Delivery",
  ]),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
