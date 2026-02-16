import React from 'react'
import { create } from 'zustand'

export const useStore = create((set) => ({
    //AuthSlice
    user: null,
    login: (user) => set({ user }),
    logout: () => set({ user: null }),

    //UISlice
    isLoading: false,
    theme: 'moon',
    toggleTheme: () => set((state) => ({ theme: state.theme === 'moon' ? 'sun' : 'moon' })),
}));

export default useStore