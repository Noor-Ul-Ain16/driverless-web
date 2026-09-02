import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema, sanitizeHeader } from "../../lib/validation";

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please fill in all required fields with valid values." },
      { status: 400 }
    );
  }

  const { firstName, lastName, email, phone, message } = parsed.data;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      replyTo: email,
      // Strip CR/LF so the name cannot inject extra email headers.
      subject: sanitizeHeader(`New Contact Form Submission from ${firstName} ${lastName}`),
      // Plain-text body: no HTML parsing, so no markup injection risk.
      text: `New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
`,
    });

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { message: "Failed to send message." },
      { status: 500 }
    );
  }
}
