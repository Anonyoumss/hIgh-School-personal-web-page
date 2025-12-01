import { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    console.log("[API] Received contact form:", {
      name: req.body.name,
      email: req.body.email,
    });

    const validatedData = contactSchema.parse(req.body);
    console.log("[API] Validation passed");

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    console.log("[API] Config check - API Key length:", apiKey?.length, "Email:", contactEmail);

    if (!apiKey) {
      console.error("[API] RESEND_API_KEY is missing");
      return res.status(500).json({ message: "Missing RESEND_API_KEY in environment" });
    }
    
    if (!contactEmail) {
      console.error("[API] CONTACT_EMAIL is missing");
      return res.status(500).json({ message: "Missing CONTACT_EMAIL in environment" });
    }

    const resend = new Resend(apiKey);

    // Email 1: Send to admin about contact message
    console.log("[API] Sending contact notification to admin...");
    const adminResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: contactEmail,
      replyTo: validatedData.email,
      subject: `New Contact Message from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px;">
          <div style="background: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-bottom: 20px;">📨 New Contact Message</h2>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            
            <div style="margin: 20px 0;">
              <p style="color: #666; font-size: 12px; font-weight: bold; text-transform: uppercase; margin: 0 0 8px 0;">From:</p>
              <p style="color: #1f2937; margin: 0; font-size: 14px;">${validatedData.name}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <p style="color: #666; font-size: 12px; font-weight: bold; text-transform: uppercase; margin: 0 0 8px 0;">Email:</p>
              <p style="margin: 0;"><a href="mailto:${validatedData.email}" style="color: #0066cc; text-decoration: none;">${validatedData.email}</a></p>
            </div>
            
            <div style="margin: 20px 0;">
              <p style="color: #666; font-size: 12px; font-weight: bold; text-transform: uppercase; margin: 0 0 8px 0;">Message:</p>
              <div style="background: #f9fafb; padding: 12px; border-radius: 4px; color: #1f2937; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${validatedData.message}</div>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="color: #666; font-size: 12px; margin: 0;">Reply directly to ${validatedData.email}</p>
          </div>
        </div>
      `,
    });

    if (adminResponse.error) {
      console.error("[API] Admin email error:", adminResponse.error);
      return res.status(500).json({
        message: `Failed to send notification: ${JSON.stringify(adminResponse.error)}`,
      });
    }

    console.log("[API] Admin email sent with ID:", adminResponse.data?.id);

    // Email 2: Send auto-reply to user
    console.log("[API] Sending auto-reply to user...");
    const userResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: validatedData.email,
      subject: "Thanks for reaching out! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px;">
          <div style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Thanks for reaching out!</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">I'll get back to you soon 🚀</p>
            </div>

            <div style="padding: 40px; text-align: center;">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Yassin DevHacker" style="width: 150px; height: 150px; border-radius: 50%; border: 4px solid #667eea; margin-bottom: 20px; object-fit: cover;">
              
              <h2 style="color: #333; margin: 20px 0 10px 0;">Yassin (DevHacker)</h2>
              <p style="color: #666; margin: 0 0 30px 0; font-size: 14px;">16-year-old developer & creative thinker</p>

              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: left;">
                <p style="color: #333; margin: 0 0 15px 0; line-height: 1.6;">
                  Hi ${validatedData.name}! Thanks so much for reaching out. I'm a 16-year-old high school student passionate about building innovative projects and exploring new technologies. I love turning ideas into code and creating things that matter.
                </p>
                <p style="color: #333; margin: 0; line-height: 1.6;">
                  I'll get back to you with more info about what I'm working on soon. In the meantime, feel free to check out my work on GitHub, subscribe to my YouTube, or hit me up on Telegram!
                </p>
              </div>

              <div style="display: flex; justify-content: center; gap: 10px; margin: 30px 0; flex-wrap: wrap;">
                <a href="https://t.me/DevHackerG" style="display: inline-block; padding: 10px 20px; background: #0088cc; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Telegram</a>
                <a href="https://github.com/Anonyoumss" style="display: inline-block; padding: 10px 20px; background: #333; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">GitHub</a>
                <a href="https://www.youtube.com/@Anonyoumss" style="display: inline-block; padding: 10px 20px; background: #ff0000; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">YouTube</a>
              </div>

              <p style="color: #999; font-size: 12px; margin: 30px 0 0 0; border-top: 1px solid #eee; padding-top: 20px;">
                - Yassin DevHacker | Building ideas into reality ✨
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (userResponse.error) {
      console.error("[API] User email error:", userResponse.error);
      return res.status(500).json({
        message: `Failed to send confirmation: ${JSON.stringify(userResponse.error)}`,
      });
    }

    console.log("[API] User email sent with ID:", userResponse.data?.id);

    res.status(200).json({
      message: "Emails sent successfully! Admin notified and auto-reply sent to user.",
      data: {
        adminEmail: adminResponse.data?.id,
        userEmail: userResponse.data?.id,
      },
    });
  } catch (error: any) {
    console.error("[API] Error:", error.message || error);

    if (error.errors) {
      return res.status(400).json({ message: error.errors[0].message });
    }

    res.status(500).json({
      message: error.message || "Failed to send emails",
    });
  }
}
