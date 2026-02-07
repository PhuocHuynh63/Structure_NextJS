import todoService from "@features/todo/service";
import { todoKeys } from "../keys";
import { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { createTodoAction } from "@features/todo/action";

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
        mutationFn: (data) => createTodoAction(data),
    }),
};