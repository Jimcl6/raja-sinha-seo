
import { Resend } from "npm:resend@2.0.0";
import { createNotificationEmailTemplate, createConfirmationEmailTemplate } from "./email-templates.ts";
import { ContactConfirmationRequest } from "./types.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

export const sendNotificationEmail = async (
  { name, email, phone, message }: ContactConfirmationRequest
) => {
  return await resend.emails.send({
    from: "Website Contact Form <noreply@rajasinhaseo.com>",
    to: ["raja@rajasinhaseo.com"],
    bcc: ["jedllorente.redkite@gmail.com"],
    subject: `New Contact Form Submission from ${name}`,
    html: createNotificationEmailTemplate(name, email, phone, message),
  });
};

export const sendConfirmationEmail = async (
  { name, email, message }: ContactConfirmationRequest
) => {
  return await resend.emails.send({
    from: "Raja Sinha <noreply@rajasinhaseo.com>",
    to: [email],
    subject: "Thank you for your inquiry - Raja Sinha SEO",
    html: createConfirmationEmailTemplate(name, message),
  });
};
