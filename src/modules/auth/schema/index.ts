import z from "zod";
export const signInSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(1, "Password required"),
});

export const registerSchema = z.object({
  username: z.string().min(1, "Username required"),
  email: z.email("Invalid email"),
  role: z.enum(["BIDDER", "SELLER"]),
  password: z.string().min(1, "Password required"),
});

export type SignInForm = z.infer<typeof signInSchema>;
export type RegisterForm = z.infer<typeof registerSchema>;
