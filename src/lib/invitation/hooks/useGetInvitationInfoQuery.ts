'use client';

import { useQuery } from '@tanstack/react-query';

import { customFetch, INVITATION_API } from '@/api';
import { cardQueryKeys, InvitationDTO } from '@/lib/invitation';

/**
 * 초대장 조회 API
 */
interface InvitationResponse {
  data: InvitationDTO[];
  message: string;
  result: string;
}
export const fetchInvitation = async (invitationId: number): Promise<InvitationResponse> => {
  return customFetch(INVITATION_API.INVITATION(invitationId), {
    method: 'GET',
  });
};

export default function useGetInvitationInfoQuery({ invitationId }: { invitationId: number }) {
  return useQuery<InvitationResponse>({
    queryKey: cardQueryKeys.info(invitationId),
    queryFn: () => fetchInvitation(invitationId),
    enabled: !!invitationId,
  });
}
