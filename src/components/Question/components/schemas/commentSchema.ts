import { z } from 'zod';

export const schemaCommentForm = z.object({
  commentData: z.object({
    comment: z.string().min(1, 'O campo não pode ficar vazio!'),
  }),
});

export type commentProps = z.infer<typeof schemaCommentForm>;
