'use client';

import { useQuery } from '@tanstack/react-query';

import { customFetch, INVITATION_API } from '@/api';
import { cardQueryKeys, InvitationDTO } from '@/lib/invitation';

/**
 * 특정 초대장 조회 API
 */
interface InvitationResponse {
  data: InvitationDTO[];
  message: string;
  result: string;
}
export const fetchInvitationKey = async (inviteKey: string): Promise<InvitationResponse> => {
  return customFetch(INVITATION_API.INVITATION_KEY(inviteKey), {
    method: 'GET',
  });
};

export default function useGetInvitationInfoKeyQuery({ inviteKey }: { inviteKey: string }) {
  return useQuery<InvitationResponse>({
    queryKey: cardQueryKeys.infoKey(inviteKey),
    queryFn: () => fetchInvitationKey(inviteKey),
    enabled: !!inviteKey,
  });
}
