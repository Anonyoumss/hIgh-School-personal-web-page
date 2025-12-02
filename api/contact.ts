
import { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";
import { render } from "@react-email/render";
import { AdminContactEmail } from "./emails/AdminContactEmail";
import { UserAutoReplyEmail } from "./emails/UserAutoReplyEmail";

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

    // Email 1: Send to admin
    console.log("[API] Sending contact notification to admin...");
    const adminHtml = await render(
      AdminContactEmail({
        senderName: validatedData.name,
        senderEmail: validatedData.email,
        message: validatedData.message,
      })
    );

    const adminResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: contactEmail,
      replyTo: validatedData.email,
      subject: `New Contact Message from ${validatedData.name}`,
      html: adminHtml,
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
    const userHtml = await render(
      UserAutoReplyEmail({
        recipientName: validatedData.name,
      })
    );

    const userResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: validatedData.email,
      subject: "Thanks for reaching out! 🚀",
      html: userHtml,
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
