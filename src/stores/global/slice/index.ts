import { StateCreator } from 'zustand';
import i18n from '@infrastructure/i18n/clients';
import { IGlobalSchema } from '@shared/schemas/zustand';
import { LOCAL_STORAGE_KEYS } from '@infrastructure/constants/localStorageKey';

export const createGlobalSlice: StateCreator<
    IGlobalSchema,
    [["zustand/devtools", never]],
    []
> = (set, get) => ({
    // --- STATE ---
    accessToken: "",
    language: "en",

    // --- ACTIONS ---
    actions: {
        setLanguage: async (language: string) => {
            try {
                await localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, language);
                await i18n.changeLanguage(language);
                set({ language });
            } catch (error) {
                console.error('Error saving language:', error);
            }
        },

        initializeLanguage: async () => {
            try {
                const savedLanguage = await localStorage.getItem(LOCAL_STORAGE_KEYS.LANGUAGE);
                const lang = savedLanguage || 'en';
                await i18n.changeLanguage(lang);
                set({ language: lang });
            } catch (error) {
                set({ language: 'en' });
            }
        },
    },
});