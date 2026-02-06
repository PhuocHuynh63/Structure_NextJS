import todoService from "@features/todo/service";
import { todoKeys } from "../keys";
import { UseQueryOptions } from "@tanstack/react-query";

export const todoOptions = {
    /**
     * 1. all - Options for the query
     * @returns {Object} - Options for the query
     */
    all: (): UseQueryOptions => ({
        queryKey: todoKeys.all,
        queryFn: () => todoService.getTodos(),
    }),
};