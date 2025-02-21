import { useQuery } from '@tanstack/react-query';

import { customFetch, INVITATION_API, GetInvitationParams } from '@/api';
import { cardQueryKeys, InvitationDTO } from '@/lib/invitation';

/**
 * 받은 초대장 조회 API
 */
interface InvitationResponse {
  data: InvitationDTO[];
  message: string;
  result: string;
}
export const fetchReceivedInvitations = async ({
  userId,
  page,
  size,
  sort,
}: GetInvitationParams): Promise<InvitationResponse> => {
  return customFetch(
    INVITATION_API.RECEIVED_INVITATIONS({
      userId,
      page,
      size,
      sort,
    }),
    {
      method: 'GET',
    },
  );
};

export function useGetReceivedInvitationsQuery({ userId, page, size, sort }: GetInvitationParams) {
  return useQuery<InvitationResponse>({
    queryKey: cardQueryKeys.received(),
    queryFn: () => fetchReceivedInvitations({ userId, page, size, sort }),
    enabled: !!userId,
  });
}
