'use client';

import { InvitationDTO } from '@/lib/invitation';
import { useInvitationTabStore } from '@/store/invitationListStore';

const dummyData = {
  all: [],
  sent: [],
  received: [],
};

interface Props {
  children: (cards: InvitationDTO[]) => JSX.Element;
}
export default function InfiniteCardFetcher({ children }: Props) {
  const { selectedTab } = useInvitationTabStore();

  return <>{children(dummyData[selectedTab])}</>;
}
