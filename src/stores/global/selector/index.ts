import { useGlobalStore } from '@stores/global/config';
import { IGlobalSchema } from '@shared/schemas/zustand';

export const useAccessTokenSelector = () => useGlobalStore((state: IGlobalSchema) => state.accessToken);
    
export const useLanguageSelector = () => useGlobalStore((state: IGlobalSchema) => state.language);