
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
  captcha: z.boolean().refine(val => val === true, {
    message: "Please verify you're not a robot",
  }),
});

export type FormValues = z.infer<typeof formSchema>;
