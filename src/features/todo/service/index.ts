import fetchPublic from "@infrastructure/fetch/public"
import { todoKeys } from "../queries/keys"
import fetchPrivate from "@infrastructure/fetch/private";

const todoService = {
    getTodos: async () => {
        return await fetchPublic.get('/todos', {
            next: { tags: [todoKeys.all] },
        })
    },
    createTodo: async (data: any) => {
        return await fetchPrivate.post('/todos', data);
    }
}

export default todoService