
import { sendNotificationEmail, sendConfirmationEmail } from "./email-service.ts";
import { ContactConfirmationRequest } from "./types.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

export const handleNotificationEmail = async (data: ContactConfirmationRequest) => {
  console.log("Sending notification email to: raja@rajasinhaseo.com");
  
  const notificationEmailResponse = await sendNotificationEmail(data);
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
};

export const handleConfirmationEmail = async (data: ContactConfirmationRequest) => {
  console.log("Sending confirmation email to:", data.email);
  
  const confirmationEmailResponse = await sendConfirmationEmail(data);
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
};

export const handleLegacyRequest = async (data: ContactConfirmationRequest) => {
  console.log("Sending confirmation email to:", data.email);
  console.log("Sending notification email to: raja@rajasinhaseo.com");

  // Send confirmation email to the person who submitted the form
  const confirmationEmailResponse = await sendConfirmationEmail(data);
  console.log("Confirmation email sent successfully:", confirmationEmailResponse);

  // Send notification email to Raja with BCC
  const notificationEmailResponse = await sendNotificationEmail(data);
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
};

export { corsHeaders };
