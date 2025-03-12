import { z } from "zod";

export const RegistrationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  addressLine1: z.string().min(3).max(200),
  addressLine2: z.string().optional(),
  city: z.string().min(2).max(100),
  postcode: z.string().min(5).max(10),
});
