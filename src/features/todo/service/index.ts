import fetchPublic from "@infrastructure/fetch/public"

const todoService = {
    getTodos: async () => {
        return await fetchPublic.get('/todos')
    }
}

export default todoService