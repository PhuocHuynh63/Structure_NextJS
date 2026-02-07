import { revalidateTag } from "next/cache";
import todoService from "@features/todo/service"
import { todoKeys } from "@features/todo/queries/keys";
import { IBackendResponse } from "@shared/schemas/backend";

export const createTodoAction = async (data: any) => {
    try {
        const res = await todoService.createTodo(data) as IBackendResponse<any>;

        if (res.statusCode === 201) {
            revalidateTag(todoKeys.all);
            return { success: true, data: res.data };
        }

        return { success: false, error: "Backend từ chối" }; //TODO: Chưa chuyển qua xài i18next
    } catch (e) {
        return { success: false, error: "Lỗi kết nối" };
    }
}