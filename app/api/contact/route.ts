import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
const {
  name,
  email,
  organization,
  subject,
  message,
} = await req.json();

console.log({
  name,
  email,
  organization,
  subject,
  message,
});

    // Save to Supabase
    const { error } = await supabase
      .from("contact_inquiries")
    .insert([
  {
    full_name: name,
    email,
    company: organization,
    subject,
    message,
  },
]);
    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Database Error" },
        { status: 500 }
      );
    }

    // Email to Admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form - ${subject}`,
      html: `
        <h2>New Inquiry</h2>

<p><b>Name:</b> ${name}</p>{email}</p>

<p><b>Company:</b> ${organization}</p>

        <p><b>Subject:</b> ${subject}</p>

        <p><b>Message:</b></p>

        <p>${message}</p>
      `,
    });

    // Auto Reply
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting CORETRION",
      html: `
        <h2>Thank You</h2>

        <p>Hello ${name},</p>

        <p>
        Thank you for contacting the CORETRION team.
        We have successfully received your inquiry.
        </p>

        <p>
        Our engineering team will review your message and
        respond within 2 business days.
        </p>

        <br/>

        <p>Regards,</p>

        <b>CORETRION Engineering Team</b>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (err) {

    console.error(err);

    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}