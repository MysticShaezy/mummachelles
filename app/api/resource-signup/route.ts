import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ResourceSignupBody = {
  name?: string;
  email?: string;
};

export async function POST(request: Request) {
  let body: ResourceSignupBody;

  try {
    body = (await request.json()) as ResourceSignupBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_SECURE } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: "michelle@mummachelles.com.au",
      replyTo: email,
      subject: "New resource download signup",
      text: `A visitor unlocked the free resources.\n\nName: ${name}\nEmail: ${email}`,
      html: `<p>A visitor unlocked the free resources.</p><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>`,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to send signup email. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
