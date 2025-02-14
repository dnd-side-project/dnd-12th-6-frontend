import { create } from 'zustand';

type InvitationTab = 'all' | 'sent' | 'received';

interface InvitationTabState {
  selectedTab: InvitationTab;
  setSelectedTab: (tab: InvitationTab) => void;
  invitationCounts: {
    all: number;
    sent: number;
    received: number;
  };
  setInvitationCounts: (counts: { all: number; sent: number; received: number }) => void;
}

export const useInvitationTabStore = create<InvitationTabState>((set) => ({
  selectedTab: 'all',
  setSelectedTab: (tab) => set({ selectedTab: tab }),
  invitationCounts: {
    all: 0,
    sent: 0,
    received: 0,
  },
  setInvitationCounts: (counts) => set({ invitationCounts: counts }),
}));
