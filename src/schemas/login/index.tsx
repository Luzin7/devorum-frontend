import { z } from 'zod';

export const userLoginSchema = z.object({
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório')
    .max(50, 'Email longo demais. Use seu melhor email!'),
  password: z
    .string()
    .min(1, 'A senha é obrigatória')
    .max(50, 'Email longo demais. Use seu melhor email!')
});

export type userLoginData = z.infer<typeof userLoginSchema>;
