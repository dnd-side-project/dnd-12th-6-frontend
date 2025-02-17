export type GetInvitationParams = {
  userId: number | null;
  page?: number;
  size?: number;
  sort?: 'asc' | 'desc';
};

export const DEFAULT_INVITATION_PARAMS = {
  page: 0,
  size: 5,
  sort: 'asc',
};
