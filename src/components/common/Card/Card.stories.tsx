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
      invitationType: 'CREATOR',
      title: '마라탕원 급구!! 마라샹궈도 좋음',
      date: '2025-02-16T12:30:00',
      theme: 'confetti',
      sticker: 'mono',
      fontName: 'basic',
      hostName: '누구누구',
    },
  },
};

export const Received: Story = {
  args: {
    card: {
      invitationType: 'INVITED',
      title: '나랑 놀사람?',
      date: '2025-02-18T16:30:00',
      theme: 'lucky',
      sticker: 'cloud',
      fontName: 'cute',
      hostName: '개구리 중사 케로로',
    },
  },
};
