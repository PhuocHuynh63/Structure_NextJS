import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { ROLE } from "@shared/constant/common";
import { ROUTES } from "@infrastructure/constants/routes";

export async function withAuth(req: NextRequest) {
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


    // Logic bảo vệ Admin
    if (pathname.startsWith(ROUTES.ADMIN.ROOT)) {
        if (!token || !isAdmin) {
            return NextResponse.redirect(new URL(ROUTES.PUBLIC.NOT_FOUND, req.url));
        }
    }

    // Bảo vệ Auth Pages
    if (token && pathname.startsWith(ROUTES.AUTH.ROOT)) {
        //TODO: Nếu thêm role đổi sang dùng switch case
        if (isAdmin) {
            return NextResponse.redirect(new URL(ROUTES.ADMIN.ROOT, req.url));
        } else if (isCustomer) {
            return NextResponse.redirect(new URL(ROUTES.PUBLIC.ROOT, req.url));
        }
    }

    // Bảo vệ các route khác (Private)
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

    return null;
}