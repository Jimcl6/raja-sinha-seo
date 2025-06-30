
export const createNotificationEmailTemplate = (
  name: string,
  email: string,
  phone?: string,
  message?: string
): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #1f2937; margin-bottom: 20px;">New Contact Form Submission</h1>
      
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #1f2937; margin-top: 0;">Contact Details:</h2>
        <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
        ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
      </div>
      
      ${message ? `
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
        <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
        <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>
      ` : ''}
      
      <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
        This notification was sent from your website contact form.
      </p>
    </div>
  `;
};

export const createConfirmationEmailTemplate = (
  name: string,
  message?: string
): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #1f2937; margin-bottom: 20px;">Thank you for reaching out!</h1>
      
      <p style="color: #374151; font-size: 16px; line-height: 1.6;">
        Hi ${name},
      </p>
      
      <p style="color: #374151; font-size: 16px; line-height: 1.6;">
        ${message || "Thank you for your interest in my SEO services. I have received your inquiry and will be responding shortly."}
      </p>
      
      <p style="color: #374151; font-size: 16px; line-height: 1.6;">
        I typically respond to all inquiries within 24 hours. In the meantime, feel free to explore my website to learn more about my services and approach to SEO.
      </p>
      
      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0;">
        <p style="color: #92400e; margin: 0; font-size: 14px;">
          <strong>What's next?</strong><br>
          I'll review your inquiry and get back to you with a personalized response based on your specific needs.
        </p>
      </div>
      
      <p style="color: #374151; font-size: 16px; line-height: 1.6;">
        Best regards,<br>
        <strong>Raja Sinha</strong><br>
        SEO Consultant
      </p>
      
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
      
      <p style="color: #9ca3af; font-size: 12px; text-align: center;">
        This is an automated confirmation email. Please do not reply to this message.
      </p>
    </div>
  `;
};
