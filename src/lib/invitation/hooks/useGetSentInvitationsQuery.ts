import { useQuery } from '@tanstack/react-query';

import { customFetch, INVITATION_API, GetInvitationParams } from '@/api';
import { cardQueryKeys, InvitationDTO } from '@/lib/invitation';

/**
 * 보낸 초대장 조회 API
 */
interface InvitationResponse {
  data: InvitationDTO[];
  message: string;
  result: string;
}

export const fetchSentInvitations = async ({
  userId,
  page,
  size,
  sort,
}: GetInvitationParams): Promise<InvitationResponse> => {
  return customFetch(
    INVITATION_API.SENT_INVITATIONS({
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

export function useGetSentInvitationsQuery({ userId, page, size, sort }: GetInvitationParams) {
  return useQuery<InvitationResponse>({
    queryKey: cardQueryKeys.sent(),
    queryFn: () => fetchSentInvitations({ userId, page, size, sort }),
    enabled: !!userId,
  });
}
