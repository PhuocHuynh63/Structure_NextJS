import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { withI18n } from "@infrastructure/middlewares/withI18n";
import { withAuth } from "@infrastructure/middlewares/withAuth";

export async function middleware(req: NextRequest) {
    const i18nResult = withI18n(req);
    if (i18nResult) return i18nResult;

    const authResult = withAuth(req);
    if (authResult) return authResult;

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};