import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "contact-admin";

function sessionToken(): string {
  const secret = process.env.CONTACT_ADMIN_SECRET ?? "dev-insecure-change-me";
  const password = process.env.CONTACT_ADMIN_PASSWORD ?? "";
  return createHmac("sha256", secret).update(password).digest("hex");
}

export async function verifyResponseSession(): Promise<boolean> {
  if (!process.env.CONTACT_ADMIN_PASSWORD) {
    return false;
  }
  const c = await cookies();
  const got = c.get(COOKIE_NAME)?.value;
  const expected = sessionToken();
  if (!got || got.length !== expected.length) {
    return false;
  }
  try {
    return timingSafeEqual(Buffer.from(got, "utf8"), Buffer.from(expected, "utf8"));
  } catch {
    return false;
  }
}

export async function setResponseSessionCookie(): Promise<void> {
  const c = await cookies();
  c.set(COOKIE_NAME, sessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearResponseSessionCookie(): Promise<void> {
  const c = await cookies();
  c.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
