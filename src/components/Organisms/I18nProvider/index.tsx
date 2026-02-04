'use client'

import i18n from "@/infrastructure/i18n/clients";
import { ILocale } from "@infrastructure/i18n/get-dictionary";
import { useMemo } from "react";

export default function I18nProvider({ lang, resources, children }:
  {
    lang: ILocale;
    resources: any;
    children: React.ReactNode;
  }
) {
  useMemo(() => {
    if (!i18n.isInitialized) {
      i18n.init({
        lng: lang,
        resources: { [lang]: resources }
      });
    } else {
      i18n.addResourceBundle(lang, 'translation', resources, true, true);
      i18n.changeLanguage(lang);
    }
  }, [lang, resources]);

  return <>{children}</>;
}