/* eslint-disable prettier/prettier */
import { z } from 'zod';

export const topicTitleSchema = z.object({
  title: z
    .string()
    .nonempty('O Título é obrigatório')
    .min(4, 'O título deve conter, no mínimo, 4 caracteres')
    .max(150, 'Título grande demais! Tente ser mais preciso.')
});

export type topicTitleData = z.infer<typeof topicTitleSchema>;
