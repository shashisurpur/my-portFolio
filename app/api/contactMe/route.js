import { mailOptions, transporter } from "@/config/nodeMailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const payload = await req.json();
  const body = payload;
  // console.log(body);

  try {
    await transporter.sendMail({
      ...mailOptions,
      // ...generateEmailContent(data),
      subject: "conatact",
      text: "test",
      html: `<h1>${body.firstname} wants to connect with you</h1><h3>Below are the details of the person who wants to contact you</h3><p>Name: ${body.firstname} ${body.lastname}</p><p>Email ID: ${body.email}</p><p>Phone NO: ${body.phone}</p><p>Description: ${body.description}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" });
  }
}
