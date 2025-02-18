import type { Meta, StoryObj } from '@storybook/react';

import Card from '.';

const meta: Meta<typeof Card> = {
  title: 'Common/Card',
  component: Card,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Sent: Story = {
  args: {
    card: {
      creatorId: 0,
      invitationId: 0,
      created_at: '2025-02-17T10:06:02.71',
      updated_at: '2025-02-17T10:06:02.71',
      place: '우리 집',
      detail_address: 'string',
      date: '2025-02-17T10:06:02.71',
      max_attendances: 0,
      description: '마라샹궈도 좋음!',
      state: 'string',
      link: 'string',
      invitationType: 'CREATOR',
      fontName: 'string',
      sticker: 'basic',
      title: '마라탕 먹방 파티',
      backgroundImageData: '/getInvitationImage?fileName=5a2f7e1f-4b43-4a4f-8747-160f46726225.jpg',
    },
  },
};

export const Received: Story = {
  args: {
    card: {
      creatorId: 0,
      invitationId: 0,
      created_at: '2025-02-17T10:06:02.71',
      updated_at: '2025-02-17T10:06:02.71',
      place: '우리 집',
      detail_address: 'string',
      date: '2025-02-17T10:06:02.71',
      max_attendances: 0,
      description: '마라샹궈도 좋음!',
      state: 'string',
      link: 'string',
      invitationType: 'INVITED',
      fontName: 'string',
      sticker: 'basic',
      title: '마라탕 먹방 파티',
      backgroundImageData: '/getInvitationImage?fileName=5a2f7e1f-4b43-4a4f-8747-160f46726225.jpg',
    },
  },
};
