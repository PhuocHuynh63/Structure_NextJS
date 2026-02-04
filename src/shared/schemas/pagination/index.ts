import { z } from "zod";

export const PaginationSchema = z.object({
    currentPage: z.number(),
    pageSize: z.number(),
    totalPages: z.number(),
    totalItems: z.number(),
});
export type IPaginationSchema = z.infer<typeof PaginationSchema>;