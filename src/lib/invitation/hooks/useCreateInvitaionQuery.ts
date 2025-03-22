'use client';

import { useMutation } from '@tanstack/react-query';

import { customFetch, INVITATION_API } from '@/api';

/**
 * 초대장 생성 API
 */
export interface SaveInvitationDataType {
  creatorId: number;
  organizerName: string;
  detailAddress: string;
  date: string;
  maxAttendances: number;
  invitationType: 'CREATOR';

  description?: string;

  title: string;
  invitationId?: number;
  createdAt?: string;
  updatedAt?: string;
  themeName?: string;
  place?: string;
  state?: string;
  link?: string;
  fontName?: string;
  sticker?: string;
  backgroundImageData?: string;
  basicBackgroundType?: string;
}

interface InvitationResponse {
  data: [
    {
      invitationId: number;
      inviteKey: string;
    },
  ];
  message: string;
  result: string;
}

export const fetchCreateInvitation = (
  values: SaveInvitationDataType,
): Promise<InvitationResponse> => {
  return customFetch(INVITATION_API.SAVE_INVITATIONS, {
    method: 'POST',
    body: values,
    isJson: true,
  });
};

export default function useCreateInvitationQuery() {
  return useMutation({
    mutationFn: fetchCreateInvitation,
    onSuccess: () => {
      console.log('success');
    },
  });
}
