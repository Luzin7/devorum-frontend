/* eslint-disable prettier/prettier */
import { z } from 'zod';

export const commentContentSchema = z.object({
  content: z
    .string()
    .nonempty('O comentário não pode ser vazio')
    .max(500, 'Comentário muito longo. Tente ser mais preciso.')
});

export type commentContentData = z.infer<typeof commentContentSchema>;
