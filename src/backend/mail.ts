// backend/mail.ts

import sgMail, { MailDataRequired } from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

// Make sure your SENDGRID_API_KEY is available
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

if (!SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is missing. Please check your .env file.');
}

sgMail.setApiKey(SENDGRID_API_KEY);


const msg: MailDataRequired = {
  to: 'amanpurohit2004@gmail.com',   
  from: 'purohitaman@icloud.com',
  subject: '🎉 You are on the Waitlist!',
  text: 'Thanks for signing up for early access to Boilrplate CLI!',
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Welcome aboard!</h2>
      <p>Thanks for joining the Boilrplate CLI waitlist 🚀</p>
      <p>We’ll notify you the moment it’s ready!</p>
    </div>
  `,
};

export async function sendEmail(to: string) {
  const msg: MailDataRequired = {
    to,
    from: process.env.SENDER_EMAIL || 'purohitaman@icloud.com',
    subject: '🎉 You are on the Waitlist!',
    text: 'Thanks for signing up for early access to Boilrplate CLI!',
    html: `
     <div style="font-family: 'Segoe UI', Roboto, sans-serif; padding: 24px; background-color: #f9fafb; color: #333;">
  <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 32px; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.05);">
    
    <h2 style="font-size: 24px; margin-bottom: 16px;">🎉 You're officially on the Boilrplate CLI waitlist!</h2>

    <p style="font-size: 16px; line-height: 1.6;">
      Thanks for signing up! You've taken the first step towards skipping boilerplate setup and jumping straight into building your next big idea.
    </p>

    <p style="font-size: 16px; line-height: 1.6;">
      I am still working some to powerful AI integration to make your project setup quick and easy. You'll be among the first to know when Boilrplate CLI is ready to launch.
    </p>

    <div style="text-align: center; margin-top: 32px;">
      <a href="https://www.heyboilrplate.com" style="display: inline-block; padding: 12px 24px; background-color: #111827; color: #ffffff; border-radius: 8px; text-decoration: none; font-size: 16px;">
        Learn More
      </a>
    </div>

    <p style="font-size: 14px; color: #666; margin-top: 32px; text-align: center;">
      In the meantime, feel free to follow our journey at <a href="https://www.heyboilrplate.com" style="color: #6366f1; text-decoration: none;">www.heyboilrplate.com</a>
    </p>

  </div>
</div>

    `,
  };

  try {
    const response = await sgMail.send(msg);
    console.log('✅ Email sent successfully!', response[0].statusCode);
  } catch (error: any) {
    console.error('❌ Error sending email:');
    if (error.response) {
      console.error(error.response.body);
    } else {
      console.error(error.message);
    }
  }
}

// Run the function
// sendEmail();
