import { contactSchema } from "@/lib/contact";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const json = (await request.json()) as unknown;
    const values = contactSchema.parse(json);

    // Placeholder: forward to CRM, email, or your Laravel API in production.
    // console.log("WaniaSol contact lead:", values);

    return NextResponse.json(
      { ok: true, message: "Lead received" },
      { status: 200 },
    );
  } catch (e) {
    const message =
      e instanceof Error ? e.message : "Invalid request payload.";
    return NextResponse.json({ ok: false, message }, { status: 400 });
  }
}
