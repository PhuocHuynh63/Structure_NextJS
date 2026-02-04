import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { ROLE } from "@constants/common";
import { ROUTES } from "@routes";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const { pathname } = req.nextUrl;

    /**
     * Lấy role từ token
     * @description: Tuỳ vào backend trả ID hay tên role
     * @example:
     * - Trả ID: 1 => ROLE.ADMIN
     * - Trả tên role: 'admin' => ROLE.ADMIN
     * - Trả ID: 2 => ROLE.CUSTOMER
     * - Trả tên role: 'customer' => ROLE.CUSTOMER
     */
    const userRole = token ? String((token as any)?.role) : null;
    const isAdmin = userRole === String(ROLE.ADMIN); //TODO: Tuỳ vào backend trả ID hay tên role
    const isCustomer = userRole === String(ROLE.CUSTOMER); //TODO: Tuỳ vào backend trả ID hay tên role
    //-----------------End-----------------//


    // Protect all admin routes - only admins can access
    if (pathname.startsWith(ROUTES.ADMIN.ROOT)) {
        if (!token || !isAdmin) {
            return NextResponse.redirect(new URL(ROUTES.PUBLIC.NOT_FOUND, req.url));
        }
    }

    // Redirect authenticated users away from auth pages
    if (token && pathname.startsWith(ROUTES.AUTH.ROOT)) {
        // Redirect based on role
        if (isAdmin) {
            return NextResponse.redirect(new URL(ROUTES.ADMIN.ROOT, req.url));
        } else if (isCustomer) {
            return NextResponse.redirect(new URL(ROUTES.PUBLIC.ROOT, req.url));
        }
    }

    // Redirect unauthenticated users to login for protected routes
    if (!token) {
        const publicStaticPaths = [ROUTES.PUBLIC.ROOT];
        const publicPrefixPaths = [ROUTES.AUTH.ROOT];

        const isPublicPath =
            publicStaticPaths.includes(pathname) ||
            publicPrefixPaths.some((prefix) => pathname.startsWith(prefix))

        if (!isPublicPath) {
            return NextResponse.redirect(new URL(ROUTES.AUTH.LOGIN, req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};