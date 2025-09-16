import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

// Enhanced validation schema with proper constraints
const contactSubmissionSchema = insertContactSubmissionSchema.extend({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").toLowerCase(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message must be less than 5000 characters")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactSubmissionSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Thank you for your message! We'll get back to you within 24 hours.",
        submission: {
          id: submission.id,
          createdAt: submission.createdAt
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        res.status(400).json({
          success: false,
          message: "Please check your form inputs.",
          errors: error.errors.map(err => ({
            field: err.path.join("."),
            message: err.message
          }))
        });
      } else {
        // Handle server errors
        console.error("Contact form submission error:", error);
        res.status(500).json({
          success: false,
          message: "Something went wrong. Please try again later."
        });
      }
    }
  });

  // Get contact submissions count (admin/debug - no PII exposed)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json({ 
        success: true,
        count: submissions.length,
        message: `${submissions.length} contact submission${submissions.length !== 1 ? 's' : ''} received`
      });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        message: "Unable to fetch contact submissions."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
