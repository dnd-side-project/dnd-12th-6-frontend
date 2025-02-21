import { create } from 'zustand';

import { IInvitation } from '@/lib/invitation/types';

export interface InvitationStore {
  invitation: IInvitation;
  setInvitation: (updates: Partial<IInvitation>) => void;
  resetInvitation: () => void;
  isModified: boolean;
}

const initialInvitation: IInvitation = {
  theme: 'confetti',
  title: '',
  sticker: 'none',
  fontName: 'basic',
  background: 'purple',
  backgroundImageData: undefined,
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
