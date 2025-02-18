import { create } from 'zustand';

import { IInvitation } from '@/lib/invitation/types';

export interface InvitationStore {
  invitation: IInvitation;
  setInvitation: (updates: Partial<IInvitation>) => void;
  resetInvitation: () => void;
  isModified: boolean;
}

const initialInvitation: IInvitation = {
  theme: 'theme1',
  title: '',
  sticker: 'sticker1',
  fontName: 'basic',
  background: 'purple',
  backgroundImageData: '',
};

export const useInvitationStore = create<InvitationStore>((set) => ({
  invitation: initialInvitation,
  setInvitation: (updates) =>
    set((state) => ({
      invitation: { ...state.invitation, ...updates },
      isModified: true,
    })),
  resetInvitation: () => set({ invitation: initialInvitation, isModified: false }),
  isModified: false,
}));
