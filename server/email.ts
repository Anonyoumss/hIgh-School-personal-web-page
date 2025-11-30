interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: ContactMessage): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    throw new Error("Missing Brevo API key or contact email configuration");
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: data.name,
          email: data.email,
        },
        to: [
          {
            email: contactEmail,
          },
        ],
        subject: `New Contact Message from ${data.name}`,
        htmlContent: `
          <h2>New Contact Message</h2>
          <p><strong>From:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Brevo API error: ${response.status} - ${error}`);
    }
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}
