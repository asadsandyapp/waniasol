"use server";

import { redirect } from "next/navigation";
import {
  clearResponseSessionCookie,
  setResponseSessionCookie,
} from "@/lib/response-auth";

export type LoginState = { error?: string } | null;

export async function loginAction(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = formData.get("password");
  const expected = process.env.CONTACT_ADMIN_PASSWORD;

  if (!expected) {
    return {
      error:
        "Server is not configured (set CONTACT_ADMIN_PASSWORD in environment).",
    };
  }

  if (typeof password !== "string" || password !== expected) {
    return { error: "Invalid password." };
  }

  await setResponseSessionCookie();
  redirect("/response");
}

export async function logoutAction(): Promise<void> {
  await clearResponseSessionCookie();
  redirect("/response");
}
