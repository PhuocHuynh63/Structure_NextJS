import { z } from 'zod'

const configShema = z.object({
    API_URL: z.string().optional(),
    INTERNAL_API_TOKEN: z.string().optional(),
    WEBSOCKET_URL: z.string().optional(),
})

const configProject = configShema.safeParse({
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    INTERNAL_API_TOKEN: process.env.INTERNAL_API_TOKEN ?? '',
    WEBSOCKET_URL: process.env.WEBSOCKET_URL ?? '',
})

if (!configProject.success) {
    throw new Error('The value of the environment variable is not valid')
}

const envConfig = configProject.data
export default envConfig