import { EmailTemplate } from "@/app/contact/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

export async function POST(request: Request) {
  const { name, email, companyName, requestType, message, contactType } =
    await request.json();

  if (!name || !email || !requestType || !message || !contactType) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY for contact form submission");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);
    const emailSubject = `New contact form submission (${requestType})`;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "avdingiswayo54@gmail.com",
      replyTo: email,
      subject: emailSubject,
      react: EmailTemplate({
        name,
        email,
        contactType,
        requestType,
        companyName,
        message,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
