'use client'

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { todoOptions } from "@features/todo/queries/options";
import { todoKeys } from "@features/todo/queries/keys";

export function useTodo() {
    /**
     * 1. useQuery hook để fetch dữ liệu từ API
     * */
    return useQuery(todoOptions.all())
}

export function useCreateTodo() {
    const queryClient = useQueryClient();

    return useMutation({
        ...todoOptions.create(),
        onSuccess: (res: any) => {
            if (res.success) {
                queryClient.invalidateQueries({ queryKey: [todoKeys.all] });
            }
        }
    });
}