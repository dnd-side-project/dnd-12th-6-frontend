'use client';

//import { invitationMockData } from '@/__mock__/data';
import { InvitationDTO } from '@/lib/invitation';
import useGetInvitationInfoQuery from '@/lib/invitation/hooks/useGetInvitationInfoQuery';

interface Props {
  invitationId: number;
  children: (data: InvitationDTO | null) => React.ReactNode;
}
export default function InviteDataFetcher({ invitationId, children }: Props) {
  const { data } = useGetInvitationInfoQuery({ invitationId });

  return <>{children(data?.data[0] ?? null)}</>;
}
