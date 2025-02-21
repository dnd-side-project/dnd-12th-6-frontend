import { useQuery } from '@tanstack/react-query';

import { customFetch, INVITATION_API } from '@/api';
import { cardQueryKeys, InvitationUserResponse } from '@/lib/invitation';

/**
 * 초대장 응답 현황 조회 API
 */
interface InvitationResponse {
  data: InvitationUserResponse[];
  message: string;
  result: string;
}
export const fetchInvitationResponse = async ({
  userId,
}: {
  userId: number;
}): Promise<InvitationResponse> => {
  return customFetch(INVITATION_API.RESPONSES(userId), {
    method: 'GET',
  });
};

export function useGetInvitationResponseQuery(userId: number) {
  return useQuery<InvitationResponse>({
    queryKey: cardQueryKeys.responses(userId),
    queryFn: () => fetchInvitationResponse({ userId }),
    enabled: !!userId,
  });
}
