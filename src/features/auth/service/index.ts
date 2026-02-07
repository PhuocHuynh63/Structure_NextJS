import { ILoginSchema } from "@features/auth/schema/entity"
import fetchPublic from "@infrastructure/fetch/public"

const authService = {
    login: async (data: ILoginSchema) => {
        return await fetchPublic.post('/auth/login', data)
    }
}

export default authService