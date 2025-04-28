// pages/api/join-waitlist.ts

import sgMail from '@sendgrid/mail';
import { NextRequest, NextResponse } from 'next/server';
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {

    const body = await request.json();
    const email = body.email;

    if (!email) {
        return NextResponse.json({ message: 'Email is required' }, { status: 400 });
      }
  const msg = {
    to: email,
    from: 'purohitaman@icloud.com', // your verified sender
    subject: '🎉 You’re on the Boilrplate CLI Waitlist!',
    html: `
       <div style="font-family: 'Segoe UI', Roboto, sans-serif; padding: 24px; background-color: #f9fafb; color: #333;">
  <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 32px; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.05);">
    
    <h2 style="font-size: 24px; margin-bottom: 16px;">🎉 You're officially on the Boilrplate CLI waitlist!</h2>

    <p style="font-size: 16px; line-height: 1.6;">
      Thanks for signing up! You've taken the first step towards skipping boilerplate setup and jumping straight into building your next big idea.
    </p>

    <p style="font-size: 16px; line-height: 1.6;">
      I am still working on some cool powerful AI integration to make your project setup quick and easy. You'll be among the first to know when Boilrplate CLI is ready to launch.
    </p>

    <div style="text-align: center; margin-top: 32px;">
      <a href="https://www.heyboilrplate.com" style="display: inline-block; padding: 12px 24px; background-color: #111827; color: #ffffff; border-radius: 8px; text-decoration: none; font-size: 16px;">
        Learn More
      </a>
    </div>

    <p style="font-size: 14px; color: #666; margin-top: 32px; text-align: center;">
      In the meantime, feel free to follow my journey at <a href="https://www.heyboilrplate.com" style="color: #6366f1; text-decoration: none;">www.heyboilrplate.com</a>
    </p>
    <p style="font-size:12px; color:#999; margin-top:20px;">
  You are receiving this email because you signed up at Boilrplate CLI.<br/>
  Visit us at <a href="https://www.heyboilrplate.com">www.heyboilrplate.com</a>
</p>

  </div>
</div>

    `,
  };


  try {
    await sgMail.send(msg);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('SendGrid error:', error.response?.body || error.message);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
