import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, companyName, requestType, message, contactType } =
    await request.json();

  if (!name || !requestType || !message || !contactType) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const emailSubject = `New contact form submission (${requestType})`;
    const emailBody = [
      `Name: ${name}`,
      `Type: ${contactType}`,
      `Company: ${companyName ?? "N/A"}`,
      "",
      message,
    ].join("\n");

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "a@bc.com",
      subject: emailSubject,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
