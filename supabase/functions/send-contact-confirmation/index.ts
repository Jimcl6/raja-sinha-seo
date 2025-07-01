
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactConfirmationRequest {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  isNotification?: boolean;
  isConfirmation?: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message, isNotification, isConfirmation }: ContactConfirmationRequest = await req.json();
    
    console.log("Sending confirmation email to:", email);
    console.log("Sending notification email to: raja@rajasinhaseo.com");

    if (isNotification) {
      // Send notification email to Raja with BCC - email parameter contains the inquirer's email for content
      const notificationEmailResponse = await resend.emails.send({
        from: "Website Contact Form <noreply@rajasinhaseo.com>",
        to: ["raja@rajasinhaseo.com"],
        bcc: ["jedllorente.redkite@gmail.com"],
        subject: `Inquiry - Contact Page`,
        html: `
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
        `,
      });

      console.log("Notification email sent successfully:", notificationEmailResponse);

      return new Response(JSON.stringify({ 
        success: true, 
        notificationEmailId: notificationEmailResponse.data?.id
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    }

    if (isConfirmation) {
      // Send confirmation email to the person who submitted the form
      const confirmationEmailResponse = await resend.emails.send({
        from: " Raja Sinha SEO <noreply@rajasinhaseo.com>",
        to: [email],
        subject: `${name}, I received your Message.`,
        html: `
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
        `,
      });

      console.log("Confirmation email sent successfully:", confirmationEmailResponse);

      return new Response(JSON.stringify({ 
        success: true, 
        confirmationEmailId: confirmationEmailResponse.data?.id
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    }

    // Legacy support - send both emails (original behavior)
    // Send confirmation email to the person who submitted the form
    const confirmationEmailResponse = await resend.emails.send({
      from: "Raja Sinha <noreply@rajasinhaseo.com>",
      to: [email],
      subject: "Thank you for your inquiry - Raja Sinha SEO",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1f2937; margin-bottom: 20px;">Thank you for reaching out!</h1>
          
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Hi ${name},
          </p>
          
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Thank you for your interest in my SEO services. I have received your inquiry and will be responding shortly.
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
      `,
    });

    console.log("Confirmation email sent successfully:", confirmationEmailResponse);

    // Send notification email to Raja with BCC
    const notificationEmailResponse = await resend.emails.send({
      from: "Website Contact Form <noreply@rajasinhaseo.com>",
      to: ["raja@rajasinhaseo.com"],
      bcc: ["jedllorente.redkite@gmail.com"],
      subject: `Inquiry - Contact Page`,
      html: `
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
      `,
    });

    console.log("Notification email sent successfully:", notificationEmailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      confirmationEmailId: confirmationEmailResponse.data?.id,
      notificationEmailId: notificationEmailResponse.data?.id
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending emails:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
