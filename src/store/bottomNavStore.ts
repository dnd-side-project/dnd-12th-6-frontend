import { create } from 'zustand';

export enum BottomNavList {
  MAIN = 'MAIN',
  CREATE = 'CREATE',
  LIST = 'LIST',
  SETTING = 'SETTING',
}

export const BOTTOM_NAV_URL: Record<BottomNavList, string> = {
  [BottomNavList.MAIN]: '/',
  [BottomNavList.CREATE]: '/create',
  [BottomNavList.LIST]: '/list',
  [BottomNavList.SETTING]: '/setting',
};

interface BottomNavState {
  activeTab: BottomNavList;
  setActiveTab: (tab: BottomNavList) => void;
}

export const useBottomNavStore = create<BottomNavState>((set) => ({
  activeTab: BottomNavList.MAIN,
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
