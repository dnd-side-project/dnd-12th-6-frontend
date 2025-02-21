import { InvitationDTO, invitationType } from '@/lib/invitation';
import { useGetReceivedInvitationsQuery } from '@/lib/invitation/hooks/useGetReceivedInvitationsQuery';
import { useGetSentInvitationsQuery } from '@/lib/invitation/hooks/useGetSentInvitationsQuery';
import { useAuthStore } from '@/store/authStore';

interface Props {
  historyType: invitationType;
  children: (cards: InvitationDTO[]) => JSX.Element;
}
export default function CardDataFetcher({ historyType, children }: Props) {
  const { user } = useAuthStore();
  const userId = user?.userId || null;

  const { data } =
    historyType === 'CREATOR'
      ? useGetSentInvitationsQuery({ userId, size: 5, sort: 'desc' })
      : useGetReceivedInvitationsQuery({ userId, size: 5, sort: 'desc' });

  return <>{children(data?.data ?? [])}</>;
}
