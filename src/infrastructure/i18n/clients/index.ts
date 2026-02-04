import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Initialize i18n with default language
i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    compatibilityJSON: "v4",
});

export default i18n;