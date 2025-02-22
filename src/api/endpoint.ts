import { fontType, stickerType, themeType } from '@/lib/invitation';

import * as TYPES from './types';

const AUTH_API = {
  KAKAO_LOGIN: '/oauth2/authorization/kakao',
};

const INVITATION_API = {
  ALL_INVITATIONS: ({
    userId,
    page = TYPES.DEFAULT_INVITATION_PARAMS.page,
    size = TYPES.DEFAULT_INVITATION_PARAMS.size,
    sort = TYPES.DEFAULT_INVITATION_PARAMS.sort as 'asc' | 'desc',
  }: TYPES.GetInvitationParams) => {
    return `/invitations?userId=${userId}&page=${page}&size=${size}&sort=${sort}`;
  },
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
  INVITATION: (invitationId: number) => {
    return `/specificInvitation?invitationId=${invitationId}`;
  },
  RESPONSES: (invitationId: number) => {
    return `/getInvitationResponseList?invitationId=${invitationId}`;
  },
};

const CARD_API = {
  SAVE_FONT: (fontName: fontType) => `/font?fontName=${fontName}`,
  SAVE_THEME: (themeName: themeType) => `/theme?themeName=${themeName}`,
  SAVE_STICKER: (stickerName: stickerType) => `/sticker?stickerName=${stickerName}`,
};

export { AUTH_API, INVITATION_API, CARD_API };
