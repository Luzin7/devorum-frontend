import { z } from 'zod';

export const schemaRegisterForm = z.object({
  userData: z.object({
    name: z.string().min(4, 'Por favor, informe um nome válido'),
    contact: z
      .string()
      .min(4, 'Por favor, informe um usuário válido')
      .max(32, 'Por favor, informe um usuário válido'),
    password: z
      .string()
      .min(6, 'Sua senha deve ter pelo menos 6 dígitos')
      .max(
        16,
        'Tamanho da senha maior do que 16 caracteres não são permitidos',
      ),
  }),
});

export type registerProps = z.infer<typeof schemaRegisterForm>;
