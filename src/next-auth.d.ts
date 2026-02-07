import 'next-auth/jwt';

declare module "next-auth" {
    interface Session {
        accessToken?: string;
        user: {
            id: string;
            role: string;
        }
    }

    interface User {
        id: string;
        role: string;
        accessToken: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        role?: string;
    }
}