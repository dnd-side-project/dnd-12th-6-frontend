import * as TYPES from './types';

const AUTH_API = {
  KAKAO_LOGIN: '/oauth2/authorization/kakao',
};

const INVITATION_API = {
  SENT_INVITATIONS: ({
    userId,
    page = TYPES.DEFAULT_INVITATION_PARAMS.page,
    size = TYPES.DEFAULT_INVITATION_PARAMS.size,
    sort = TYPES.DEFAULT_INVITATION_PARAMS.sort as 'asc' | 'desc',
  }: TYPES.GetInvitationParams) => {
    return `/creatorInvitations?userId=${userId}&page=${page}&size=${size}&sort=${sort}`;
  },
  RECEIVED_INVITATIONS: ({
    userId,
    page = TYPES.DEFAULT_INVITATION_PARAMS.page,
    size = TYPES.DEFAULT_INVITATION_PARAMS.size,
    sort = TYPES.DEFAULT_INVITATION_PARAMS.sort as 'asc' | 'desc',
  }: TYPES.GetInvitationParams) => {
    return `/invitedInvitations?userId=${userId}&page=${page}&size=${size}&sort=${sort}`;
  },
  SAVE_INVITATIONS: '/invitation',
};

export { AUTH_API, INVITATION_API };
