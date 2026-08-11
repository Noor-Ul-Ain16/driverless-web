import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      company,
      phone,
      jobTitle,
      interests,
      message,
    } = body;

    // Nodemailer SMTP Transporter setup (Gmail Example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Sender Email (e.g. your app gmail)
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    const formattedInterests =
      interests && interests.length > 0
        ? interests.join(", ")
        : "None selected";

    // Email Body HTML Setup
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.OWNER_EMAIL, 
      subject: `New Sponsorship Inquiry from ${company} (${firstName} ${lastName})`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #8a1d1d; border-bottom: 2px solid #8a1d1d; padding-bottom: 8px;">
            New Sponsorship Inquiry
          </h2>
          
          <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Work Email:</strong> ${email}</p>
          <p><strong>Phone / WhatsApp:</strong> ${phone || "N/A"}</p>
          <p><strong>Company / Organization:</strong> ${company}</p>
          <p><strong>Job Title / Designation:</strong> ${jobTitle || "N/A"}</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;" />
          
          <p><strong>Interested Support Areas:</strong></p>
          <p style="background: #f9f9f9; padding: 10px; border-radius: 5px;">${formattedInterests}</p>
          
          <p><strong>Additional Notes / Message:</strong></p>
          <p style="background: #f9f9f9; padding: 10px; border-radius: 5px;">${message || "No additional message provided."}</p>
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