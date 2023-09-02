import { z } from 'zod';

export const schemaLoginForm = z.object({
  userData: z.object({
    name: z.string().min(4, 'Por favor, informe um nome válido'),
    password: z.string().min(4, 'Por favor, informe uma senha válida'),
  }),
});

export type loginProps = z.infer<typeof schemaLoginForm>;
