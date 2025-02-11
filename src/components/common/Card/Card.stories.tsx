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
      invitationType: 'SENT',
      title: '보낸 초대장',
      date: '2025-02-16T12:30:00',
      template: 'template',
      sticker: 'sticker',
      font: 'font',
      hostName: '누구누구',
    },
  },
};

export const Received: Story = {
  args: {
    card: {
      invitationType: 'RECEIVED',
      title: '받은 초대장',
      date: '2025-02-18T16:30:00',
      template: 'template',
      sticker: 'sticker',
      font: 'font',
    },
  },
};
