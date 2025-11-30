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

    // Validate request body
    const validatedData = contactSchema.parse(req.body);
    console.log("[API] Validation passed");

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    console.log("[API] Config check - API Key:", !!apiKey, "Email:", contactEmail);

    if (!apiKey || !contactEmail) {
      console.error("[API] Missing configuration");
      return res.status(500).json({ message: "Server configuration error" });
    }

    const resend = new Resend(apiKey);

    console.log("[API] Sending email via Resend...");
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: contactEmail,
      replyTo: validatedData.email,
      subject: `New Contact Message from ${validatedData.name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("[API] Resend response:", JSON.stringify(response, null, 2));

    if (response.error) {
      console.error("[API] Resend error:", response.error);
      return res
        .status(500)
        .json({
          message: `Email service error: ${JSON.stringify(response.error)}`,
        });
    }

    console.log("[API] Email sent successfully with ID:", response.data?.id);
    res.status(200).json({
      message: "Email sent successfully",
      data: response.data,
    });
  } catch (error: any) {
    console.error("[API] Error:", error.message || error);

    if (error.errors) {
      return res
        .status(400)
        .json({ message: error.errors[0].message });
    }

    res.status(500).json({
      message: error.message || "Failed to send email",
    });
  }
}
