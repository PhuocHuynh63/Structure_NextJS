import todoService from "@features/todo/service";
import { todoKeys } from "../keys";

export const todoOptions = {
    all: () => ({
        queryKey: todoKeys.all,
        queryFn: () => todoService.getTodos(),
    }),
};