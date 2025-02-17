import { InvitationDTO } from '@/lib/invitation';
import { useGetSentInvitationsQuery } from '@/lib/invitation/hooks/useGetSentInvitationsQuery';
import { useAuthStore } from '@/store/authStore';

interface Props {
  children: (cards: InvitationDTO[]) => JSX.Element;
}
export default function CardDataFetcher({ children }: Props) {
  const { user } = useAuthStore();
  const userId = user?.userId || null;

  const { data } = useGetSentInvitationsQuery({
    userId: userId,
    size: 5,
    sort: 'desc',
  });

  return <>{children(data ?? [])}</>;
}
