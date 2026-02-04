import z from "zod";

export const globalSchema = z.object({
    accessToken: z.string(),
    language: z.string()
});

export type IGlobalSchema = z.infer<typeof globalSchema>;