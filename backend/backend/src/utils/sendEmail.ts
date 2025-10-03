import sgMail from '@sendgrid/mail';
import { env } from '../config/env';

sgMail.setApiKey(env.SENDGRID_API_KEY);

export async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  const msg = {
    to,
    from: 'noreply@mesotheliomaattorney.app', // Replace with your verified sender
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error('Email sending failed:', error);
  }
}
