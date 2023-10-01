/* eslint-disable prettier/prettier */
import { z } from 'zod';

export const userLoginSchema = z.object({
  email: z.string().nonempty('O e-mail é obrigatório'),
  password: z.string().nonempty('A senha é obrigatória')
});

export type userLoginData = z.infer<typeof userLoginSchema>;