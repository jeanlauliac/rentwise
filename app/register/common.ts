import { z } from "zod";

export const RegistrationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  propertyAddress: z.string().min(10).max(600),
});
