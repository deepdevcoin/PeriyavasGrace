import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email, phone, service, timestamp, googleSignIn } = await req.json();

    // You would typically integrate with Google Sheets API here
    // For now, we'll just log and return success
    console.log("Booking received:", {
      fullName,
      email,
      phone,
      service,
      timestamp,
      googleSignIn,
    });

    // In production, you would:
    // 1. Set up Google Sheets API credentials
    // 2. Use the Google Sheets API to append the row
    // Example:
    // const auth = new google.auth.GoogleAuth({
    //   credentials: JSON.parse(Deno.env.get("GOOGLE_SHEETS_CREDENTIALS") || ""),
    //   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    // });
    // 
    // const sheets = google.sheets({ version: "v4", auth });
    // await sheets.spreadsheets.values.append({
    //   spreadsheetId: Deno.env.get("GOOGLE_SHEET_ID"),
    //   range: "Bookings!A:G",
    //   valueInputOption: "USER_ENTERED",
    //   requestBody: {
    //     values: [[timestamp, fullName, email, phone, service, googleSignIn]],
    //   },
    // });

    return new Response(
      JSON.stringify({ success: true, message: "Booking saved successfully" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    console.error("Error saving booking:", error);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }
});
