import { z } from "zod";

export const updateUserSchema = z.object({
  name: z.string().min(2).max(64),
  username: z.string().min(2).max(64),
  email: z.string().email(),
  city: z.string().min(2).max(64),
  phone: z.string().regex(/^\d+$/, "Только цифры"),
  companyName: z.string().min(2).max(64),
});

export type UpdateUserFormData = z.infer<typeof updateUserSchema>;
