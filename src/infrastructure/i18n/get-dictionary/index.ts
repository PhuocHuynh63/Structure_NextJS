const dictionaries = {
  en: () => import('@shared/locales/en').then((m) => m.default),
  vi: () => import('@shared/locales/vi').then((m) => m.default),
};

export type ILocale = keyof typeof dictionaries;

export const getDictionary = async (locale: ILocale) => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries.en();
};