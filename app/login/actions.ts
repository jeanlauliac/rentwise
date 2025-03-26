import { LoginSchema } from "./common";
import { z } from "zod";

export async function login(values: z.infer<typeof LoginSchema>) {
  const { email, password } = values;
}
