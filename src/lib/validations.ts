import { z } from "zod";

export const EarlyAccessSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(254, "Email must be under 254 characters"),
  source: z.string(),
});

export type EarlyAccessFormData = z.infer<typeof EarlyAccessSchema>;
