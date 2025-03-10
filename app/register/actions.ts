"use server";

import { RegistrationSchema } from "./common";
import { z } from "zod";
export async function registerLandlord(
  values: z.infer<typeof RegistrationSchema>
) {
  const { name, email } = RegistrationSchema.parse(values);
  console.log(name, email);
}
