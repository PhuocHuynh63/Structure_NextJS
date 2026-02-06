import fetchInternal from "@infrastructure/fetch/internal"

const todoService = {
    getTodos: async () => {
        return await fetchInternal.get('/todos')
    }
}

export default todoService