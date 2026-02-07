import todoService from "@features/todo/service";
import { todoKeys } from "../keys";
import { UseMutationOptions, useQueryClient, UseQueryOptions } from "@tanstack/react-query";
import { IBackendResponse } from "@shared/schemas/backend";

const queryClient = useQueryClient();

export const todoOptions = {
    /**
     * 1. all - Options for the query
     * @returns {Object} - Options for the query
     */
    all: (): UseQueryOptions => ({
        queryKey: [todoKeys.all],
        queryFn: () => todoService.getTodos(),
    }),

    create: (): UseMutationOptions => ({
        mutationFn: (data) => todoService.createTodo(data) as Promise<IBackendResponse<any>>,
    }),
};