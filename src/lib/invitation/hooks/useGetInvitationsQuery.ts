import { useQuery } from '@tanstack/react-query';

import { customFetch, INVITATION_API, GetInvitationParams } from '@/api';
import { cardQueryKeys, InvitationDTO } from '@/lib/invitation';

/**
 * 전체 초대장 조회 API
 */
interface InvitationResponse {
  data: InvitationDTO[];
  message: string;
  result: string;
}
export const fetchInvitations = async ({
  userId,
  page,
  size,
  sort,
}: GetInvitationParams): Promise<InvitationResponse> => {
  return customFetch(
    INVITATION_API.ALL_INVITATIONS({
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

export function useGetInvitationsQuery({ userId, page, size, sort }: GetInvitationParams) {
  return useQuery<InvitationResponse>({
    queryKey: cardQueryKeys.all,
    queryFn: () => fetchInvitations({ userId, page, size, sort }),
    enabled: !!userId,
  });
}
