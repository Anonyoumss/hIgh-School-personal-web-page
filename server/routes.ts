import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      await sendContactEmail(validatedData);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error: any) {
      if (error.errors) {
        return res.status(400).json({ message: error.errors[0].message });
      }
      res.status(500).json({ message: "Failed to send email" });
    }
  });

  return httpServer;
}
