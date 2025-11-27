// import { EmailTemplate } from "@/ contact/components/email-template";
import {EmailTemplate} from "@/app/contact/components/email-template"
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, companyName, requestType, message, contactType } =
    await request.json();

  if (!name || !email || !requestType || !message || !contactType) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const emailSubject = `New contact form submission (${requestType})`;
    const emailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Type: ${contactType}`,
      `Company: ${companyName ?? "N/A"}`,
      "",
      message,
    ].join("\n");

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "avdingiswayo54@gmail.com",
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
