import fetchPrivate from "@infrastructure/fetch/private"
import { ILoginSchema } from "@features/auth/schema/entity"

const authService = {
    login: async (data: ILoginSchema) => {
        return await fetchPrivate.post('/auth/login', data)
    }
}

export default authService