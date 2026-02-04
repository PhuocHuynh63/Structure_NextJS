import fetchClient from "@infrastructure/fetch/client"
import { ILoginSchema } from "@features/auth/schema/entity"

const authService = {
    login: async (data: ILoginSchema) => {
        return await fetchClient.post('/auth/login', data)
    }
}

export default authService