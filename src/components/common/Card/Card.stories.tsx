import type { Meta, StoryObj } from '@storybook/react';

import Card from '.';

const meta: Meta<typeof Card> = {
  title: 'Common/Card',
  component: Card,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

// card: {
//   invitationType: 'CREATOR',
//   title: '마라탕원 급구!! 마라샹궈도 좋음',
//   date: '2025-02-16T12:30:00',
//   themeName: 'confetti',
//   sticker: 'mono',
//   fontName: 'basic',
//   hostName: '누구누구',
// },

export const Sent: Story = {
  args: {
    card: {
      creatorId: 1,
      invitationId: 1,
      createdAt: '2025-02-16T12:30:00',
      updatedAt: '2025-02-16T12:30:00',
      place: '나의 최애 마라탕 플레이스',
      detailAddress: '서울시 강남구',
      date: '2025-02-16T12:30:00',
      maxAttendances: 5,
      description: '마라탕원에서 마라탕 먹어요',
      state: 'Completed',
      link: '',
      invitationType: 'CREATOR',
      fontName: 'basic',
      sticker: 'mono',
      title: '마라탕원 급구!! 마라샹궈도 좋음',
      backgroundImageData: 'none',
      organizerName: '누구누구',
      themeName: 'confetti',
      basicBackgroundType: 'purple',
      hostProfileImageUrl: null,
    },
  },
};

export const Received: Story = {
  args: {
    card: {
      creatorId: 1,
      invitationId: 1,
      createdAt: '2025-02-16T12:30:00',
      updatedAt: '2025-02-16T12:30:00',
      place: '대전 성심당 본점',
      detailAddress: '서울시 강남구',
      date: '2025-02-16T12:30:00',
      maxAttendances: 5,
      description: '나랑 빵 먹으러 갈래?',
      state: 'Canceled',
      link: '',
      invitationType: 'INVITED',
      fontName: 'cute',
      sticker: 'cloud',
      title: '성심당 빵 모임',
      backgroundImageData: 'none',
      organizerName: '개구리 중사 케로로',
      themeName: 'lucky',
      basicBackgroundType: 'blue',
      hostProfileImageUrl: null,
    },
  },
};
