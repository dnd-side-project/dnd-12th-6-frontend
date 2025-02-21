'use client';

import { InvitationDTO } from '@/lib/invitation';
import { useGetInvitationsQuery } from '@/lib/invitation/hooks/useGetInvitationsQuery';
import { useGetReceivedInvitationsQuery } from '@/lib/invitation/hooks/useGetReceivedInvitationsQuery';
import { useGetSentInvitationsQuery } from '@/lib/invitation/hooks/useGetSentInvitationsQuery';
import { useAuthStore } from '@/store/authStore';
import { useInvitationTabStore } from '@/store/invitationListStore';

interface Props {
  children: (cards: InvitationDTO[]) => JSX.Element;
}
export default function InfiniteCardFetcher({ children }: Props) {
  const { user } = useAuthStore();
  const userId = user?.userId || null;
  const { selectedTab } = useInvitationTabStore();

  const { data } =
    selectedTab === 'all'
      ? useGetInvitationsQuery({ userId, size: 5, sort: 'desc' })
      : selectedTab === 'sent'
        ? useGetSentInvitationsQuery({ userId, size: 5, sort: 'desc' })
        : useGetReceivedInvitationsQuery({ userId, size: 5, sort: 'desc' });

  return <>{children(data?.data ?? [])}</>;
}
