import { z } from "zod";

export const registerSchema = z.object({
    name: z
    .string()
    .nonempty("Insira um nome"),
    email: z
    .string()
    .nonempty("Insira um email")
    .email("Insira um email válido"),
    password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .regex(/[A-Z]+/, "A senha deve ter ao menos uma letra maiúscula")
    .regex(/[a-z]+/, "A senha deve ter ao menos uma letra minúscula")
    .regex(/[0-9]+/, "A senha deve ter ao menos um número"),
    confirmPassword: z
    .string()
    .nonempty("Confirme sua senha !"),
    bio: z
    .string()
    .nonempty("Insira uma descrição"),
    contact: z
    .string()
    .nonempty("Insira uma forma de contato"),
    course_module: z
   .string()
    .nonempty()
})