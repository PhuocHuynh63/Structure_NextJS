import { useQuery } from "@tanstack/react-query";
import { todoOptions } from "@features/todo/queries/options";

export function useTodo() {
    /**
     * 1. useQuery hook để fetch dữ liệu từ API
     * */
    return useQuery(todoOptions.all())
}