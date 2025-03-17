import { create } from 'zustand';

import ROUTER_PATH from '@/constants/router';

export enum BottomNavList {
  MAIN = 'MAIN',
  CREATE = 'CREATE',
  LIST = 'LIST',
  SETTING = 'SETTING',
}

export const BOTTOM_NAV_URL: Record<BottomNavList, string> = {
  [BottomNavList.MAIN]: ROUTER_PATH.MAIN,
  [BottomNavList.CREATE]: ROUTER_PATH.INVITATION.CREATE,
  [BottomNavList.LIST]: ROUTER_PATH.INVITATION.LIST,
  [BottomNavList.SETTING]: ROUTER_PATH.SETTING,
};

interface BottomNavState {
  activeTab: BottomNavList;
  setActiveTab: (tab: BottomNavList) => void;
}

export const useBottomNavStore = create<BottomNavState>((set) => ({
  activeTab: BottomNavList.MAIN,
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
