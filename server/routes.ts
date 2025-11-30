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
      console.log("[API] Received contact form submission:", { name: req.body.name, email: req.body.email });
      
      const validatedData = contactSchema.parse(req.body);
      console.log("[API] Validation passed");
      
      const result = await sendContactEmail(validatedData);
      console.log("[API] Email service response:", result);
      
      res.status(200).json({ message: result.message, data: result.data });
    } catch (error: any) {
      console.error("[API] Contact endpoint error:", error.message || error);
      
      if (error.errors) {
        return res.status(400).json({ message: error.errors[0].message });
      }
      
      res.status(500).json({ message: error.message || "Failed to send email" });
    }
  });

  return httpServer;
}
