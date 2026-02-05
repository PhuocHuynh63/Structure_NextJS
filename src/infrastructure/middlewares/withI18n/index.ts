import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ILocale } from '@infrastructure/i18n/get-dictionary';
import { DEFAULT_LOCALE, LOCALES } from '@shared/constant/i18n';
import { getLocale } from '@infrastructure/i18n/get-locale';

export function withI18n(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const pathnameHasLocale = LOCALES.some((locale: ILocale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return null;

    let locale = getLocale(req);

    const finalLocale = LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;

    if (finalLocale === DEFAULT_LOCALE) {
        return NextResponse.rewrite(new URL(`/${DEFAULT_LOCALE}${pathname}`, req.url));
    }

    return NextResponse.redirect(new URL(`/${finalLocale}${pathname}`, req.url));
}