// supabase/functions/send-email/index.ts
// This is a Deno Edge Function for Supabase

import { serve } from 'https://deno.land/std@0.203.0/http/server.ts';

// Gmail SMTP Configuration
const SMTP_HOST = 'smtp.gmail.com';
const SMTP_PORT = 587;
const SMTP_USER = 'espragera.allyza@gmail.com';  // ← Replace with your Gmail
const SMTP_PASSWORD = 'lmiq edqc jnga luno';  // ← Replace with App Password

// CORS headers for browser requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Parse request body
    const { to, subject, html, patientName, doctorName, appointmentDate, appointmentTime } = await req.json();
    
    // Validate required fields
    if (!to || !subject) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Missing required fields: to and subject are required' 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Create email content
    const emailContent = `From: Wellmeadows Hospital <${SMTP_USER}>
To: ${to}
Subject: ${subject}
MIME-Version: 1.0
Content-Type: text/html; charset=utf-8

${html || `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background: #0f2b3d; padding: 20px; text-align: center; color: white; }
        .content { padding: 20px; }
        .footer { text-align: center; font-size: 12px; color: #666; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Wellmeadows Hospital</h2>
            <p>Appointment Confirmation</p>
        </div>
        <div class="content">
            <p>Dear <strong>${patientName || 'Patient'}</strong>,</p>
            <p>Your appointment has been confirmed.</p>
            <ul>
                <li><strong>Doctor:</strong> Dr. ${doctorName || 'our doctor'}</li>
                <li><strong>Date:</strong> ${appointmentDate || 'N/A'}</li>
                <li><strong>Time:</strong> ${appointmentTime || 'N/A'}</li>
            </ul>
            <p>Please arrive 15 minutes before your scheduled time.</p>
            <p>Thank you,<br>Wellmeadows Hospital</p>
        </div>
        <div class="footer">
            <p>123 Healthcare Ave, Medical City | Tel: (555) 123-4567</p>
        </div>
    </div>
</body>
</html>
`}`;

    // For demo purposes, log the email (since SMTP requires additional setup)
    console.log('=== EMAIL WOULD BE SENT ===');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('Content:', emailContent.substring(0, 500) + '...');
    console.log('===========================');

    // In a real implementation with SMTP, you would add the SMTP code here
    // For now, return success for demo
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully (demo mode)',
        to: to,
        subject: subject
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in send-email function:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Internal server error'
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});