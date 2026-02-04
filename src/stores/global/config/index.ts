import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IGlobalSchema } from '@shared/schemas/zustand';
import { createGlobalSlice } from '@stores/global/slice';

export const useGlobalStore = create<IGlobalSchema>()(
    devtools(
        (set, get, api) => ({
            ...createGlobalSlice(set, get, api),
        }),
        { name: 'GlobalStore' }
    )
);