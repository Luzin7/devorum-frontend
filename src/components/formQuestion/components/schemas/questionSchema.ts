import { z } from 'zod';

export const questionSchema = z.object({
  userData: z.object({
    title: z
      .string()
      .min(4, 'Por favor, informe um título válido')
      .max(50, 'Por favor, diminua seu título'),
    question: z
      .string()
      .min(4, 'Por favor, informe uma senha válida')
      .max(500, 'Por favor, seja mais preciso com sua pergunta'),
  }),
});

export type questionProps = z.infer<typeof questionSchema>;
