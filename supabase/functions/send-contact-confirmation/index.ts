
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { ContactConfirmationRequest } from "./types.ts";
import { handleNotificationEmail, handleConfirmationEmail, handleLegacyRequest, corsHeaders } from "./handlers.ts";

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactConfirmationRequest = await req.json();
    
    if (data.isNotification) {
      return await handleNotificationEmail(data);
    }

    if (data.isConfirmation) {
      return await handleConfirmationEmail(data);
    }

    // Legacy support - send both emails (original behavior)
    return await handleLegacyRequest(data);
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
