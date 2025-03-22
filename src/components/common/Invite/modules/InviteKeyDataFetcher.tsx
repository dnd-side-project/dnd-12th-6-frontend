'use client';

import { InvitationDTO } from '@/lib/invitation';
import useGetInvitationInfoKeyQuery from '@/lib/invitation/hooks/useGetInvitationInfoSubKeyQuery';

interface Props {
  inviteKey: string;
  children: (data: InvitationDTO | null) => React.ReactNode;
}
export default function InviteKeyDataFetcher({ inviteKey, children }: Props) {
  const { data } = useGetInvitationInfoKeyQuery({ inviteKey });

  return <>{children(data?.data[0] ?? null)}</>;
}
