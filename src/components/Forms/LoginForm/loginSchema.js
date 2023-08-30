import { z } from "zod";

export const loginSchema = z.object({
    email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("Forneça um email válido"),
    password: z
    .string()
    .nonempty("Insira sua senha"),
})