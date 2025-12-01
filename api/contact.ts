import { VercelRequest, VercelResponse } from "@vercel/node";
import * as SibApiV3Sdk from "sib-api-v3-sdk";
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

    const apiKey = process.env.BREVO_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    console.log("[API] Config check - API Key length:", apiKey?.length, "Email:", contactEmail);

    if (!apiKey) {
      console.error("[API] BREVO_API_KEY is missing");
      return res.status(500).json({ message: "Missing BREVO_API_KEY in environment" });
    }
    
    if (!contactEmail) {
      console.error("[API] CONTACT_EMAIL is missing");
      return res.status(500).json({ message: "Missing CONTACT_EMAIL in environment" });
    }

    // Configure Brevo API
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKeyAuth = defaultClient.authentications["api-key"];
    apiKeyAuth.apiKey = apiKey;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    // Render email templates to HTML
    console.log("[API] Rendering email templates...");
    const adminHtml = await render(
      AdminContactEmail({
        senderName: validatedData.name,
        senderEmail: validatedData.email,
        message: validatedData.message,
      })
    );

    const userHtml = await render(
      UserAutoReplyEmail({
        recipientName: validatedData.name,
      })
    );

    // Email 1: Send to admin
    console.log("[API] Sending contact notification to admin...");
    const adminEmailRequest = new SibApiV3Sdk.SendSmtpEmail();
    adminEmailRequest.subject = `New Contact Message from ${validatedData.name}`;
    adminEmailRequest.htmlContent = adminHtml;
    adminEmailRequest.sender = { name: "DevHacker Portfolio", email: "noreply@devhacker.com" };
    adminEmailRequest.to = [{ email: contactEmail, name: "Yassin" }];
    adminEmailRequest.replyTo = { email: validatedData.email, name: validatedData.name };

    const adminResponse = await apiInstance.sendTransacEmail(adminEmailRequest);
    console.log("[API] Admin email sent with ID:", adminResponse.messageId);

    // Email 2: Send auto-reply to user
    console.log("[API] Sending auto-reply to user...");
    const userEmailRequest = new SibApiV3Sdk.SendSmtpEmail();
    userEmailRequest.subject = "Thanks for reaching out! 🚀";
    userEmailRequest.htmlContent = userHtml;
    userEmailRequest.sender = { name: "Yassin DevHacker", email: "noreply@devhacker.com" };
    userEmailRequest.to = [{ email: validatedData.email, name: validatedData.name }];

    const userResponse = await apiInstance.sendTransacEmail(userEmailRequest);
    console.log("[API] User email sent with ID:", userResponse.messageId);

    res.status(200).json({
      message: "Emails sent successfully! Admin notified and auto-reply sent to user.",
      data: {
        adminEmail: adminResponse.messageId,
        userEmail: userResponse.messageId,
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
