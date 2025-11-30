import { Resend } from "resend";

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: ContactMessage): Promise<{ success: boolean; message: string; data?: any; error?: any }> {
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  console.log("[Resend] API Key present:", !!apiKey);
  console.log("[Resend] Contact email:", contactEmail);

  if (!apiKey || !contactEmail) {
    const error = "Missing Resend API key or contact email configuration";
    console.error("[Resend] Error:", error);
    throw new Error(error);
  }

  const resend = new Resend(apiKey);

  try {
    console.log("[Resend] Sending email to:", contactEmail);
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: contactEmail,
      replyTo: data.email,
      subject: `New Contact Message from ${data.name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("[Resend] Response:", JSON.stringify(response, null, 2));

    if (response.error) {
      console.error("[Resend] API Error:", response.error);
      throw new Error(`Resend API error: ${JSON.stringify(response.error)}`);
    }

    console.log("[Resend] Email sent successfully with ID:", response.data?.id);
    return { success: true, message: "Email sent successfully", data: response.data };
  } catch (error: any) {
    console.error("[Resend] Exception caught:", error);
    throw new Error(`Failed to send email: ${error.message || JSON.stringify(error)}`);
  }
}
