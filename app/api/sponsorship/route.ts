import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sponsorshipSchema, sanitizeHeader, escapeHtml } from "../../lib/validation";

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = sponsorshipSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Please fill in all required fields with valid values." },
      { status: 400 }
    );
  }

  const { firstName, lastName, email, company, phone, jobTitle, interests, message } =
    parsed.data;

  try {
    // Nodemailer SMTP Transporter setup (Gmail Example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Sender Email (e.g. your app gmail)
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    const formattedInterests =
      interests.length > 0 ? interests.join(", ") : "None selected";

    // HTML-escape every user-controlled value before it enters the HTML body.
    const safe = {
      firstName: escapeHtml(firstName),
      lastName: escapeHtml(lastName),
      email: escapeHtml(email),
      company: escapeHtml(company),
      phone: phone ? escapeHtml(phone) : "N/A",
      jobTitle: jobTitle ? escapeHtml(jobTitle) : "N/A",
      interests: escapeHtml(formattedInterests),
      message: message ? escapeHtml(message) : "No additional message provided.",
    };

    // Email Body HTML Setup
    const mailOptions = {
      // Strip CR/LF from the display name so it cannot inject extra headers.
      from: `"${sanitizeHeader(`${firstName} ${lastName}`)}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.OWNER_EMAIL,
      subject: sanitizeHeader(
        `New Sponsorship Inquiry from ${company} (${firstName} ${lastName})`
      ),
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #8a1d1d; border-bottom: 2px solid #8a1d1d; padding-bottom: 8px;">
            New Sponsorship Inquiry
          </h2>

          <p><strong>Full Name:</strong> ${safe.firstName} ${safe.lastName}</p>
          <p><strong>Work Email:</strong> ${safe.email}</p>
          <p><strong>Phone / WhatsApp:</strong> ${safe.phone}</p>
          <p><strong>Company / Organization:</strong> ${safe.company}</p>
          <p><strong>Job Title / Designation:</strong> ${safe.jobTitle}</p>

          <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;" />

          <p><strong>Interested Support Areas:</strong></p>
          <p style="background: #f9f9f9; padding: 10px; border-radius: 5px;">${safe.interests}</p>

          <p><strong>Additional Notes / Message:</strong></p>
          <p style="background: #f9f9f9; padding: 10px; border-radius: 5px;">${safe.message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
