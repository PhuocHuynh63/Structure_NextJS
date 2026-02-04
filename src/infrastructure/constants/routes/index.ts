const AUTH = {
    ROOT: '/auth',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    VERIFY_OTP: '/auth/verify-otp',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email',
    UNAUTHORIZED: '/auth/unauthorized',
    LOGOUT: '/logout',
};

const ADMIN = {
    ROOT: '/admin',
}

const PUBLIC = {
    ROOT: '/',
    NOT_FOUND: '/not-found',
}

export const ROUTES = {
    AUTH,
    PUBLIC,
    ADMIN,
};