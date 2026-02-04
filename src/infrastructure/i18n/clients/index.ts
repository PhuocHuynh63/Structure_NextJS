import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enShared from "@shared/locales/en";
import viShared from "@shared/locales/vi";

export const resources = {
    en: { translation: { ...enShared } },
    vi: { translation: { ...viShared } },
};

// Initialize i18n with default language
i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    compatibilityJSON: "v4",
});

export default i18n;