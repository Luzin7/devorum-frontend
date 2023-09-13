import { z } from 'zod';

export const schemaUpdatePasswordForm = z.object({
  userData: z.object({
    password: z
      .string()
      .min(6, 'Sua senha deve ter pelo menos 6 dígitos')
      .max(
        16,
        'Tamanho da senha maior do que 16 caracteres não são permitidos',
      ),
    passwordConfirm: z
      .string()
      .min(6, 'Sua senha deve ter pelo menos 6 dígitos')
      .max(
        16,
        'Tamanho da senha maior do que 16 caracteres não são permitidos',
      ),
  }),
});

export type UpdatePasswordProps = z.infer<typeof schemaUpdatePasswordForm>;
