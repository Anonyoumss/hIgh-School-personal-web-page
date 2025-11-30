import { Resend } from "resend";

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: ContactMessage): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    throw new Error("Missing Resend API key or contact email configuration");
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: contactEmail,
      reply_to: data.email,
      subject: `New Contact Message from ${data.name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}
