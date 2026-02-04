'use client'

import i18n from '@infrastructure/i18n/clients'
import { useEffect } from 'react'

export default function I18nProvider({
  lang,
  resources,
  children
}: {
  lang: string,
  resources: any,
  children: React.ReactNode
}) {
  if (!i18n.isInitialized) {
    i18n.init({
      lng: lang,
      resources: { [lang]: resources }
    })
  }

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
  }, [lang])

  return <>{children}</>
}