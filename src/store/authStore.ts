import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { IUser } from '@/lib/auth';

export interface AuthStore {
  isLogin: boolean;
  user: IUser | null;
  setUser: (user: IUser) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isLogin: false,
      user: null,
      setUser: (user: IUser) => set({ isLogin: true, user }),
      logout: () => set({ isLogin: false, user: null }),
    }),
    {
      name: 'auth-storage',
    },
  ),
);
