import { match } from '@formatjs/intl-localematcher';
import { DEFAULT_LOCALE, LOCALES } from '@shared/constant/i18n';
import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';
import { ILocale } from '../get-dictionary';

export function getLocale(request: NextRequest): ILocale {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
    const locales = LOCALES;
    const defaultLocale = DEFAULT_LOCALE;

    return match(languages, locales, defaultLocale) as ILocale;
}