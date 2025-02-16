import type { Meta, StoryObj } from '@storybook/react';

import CardScroller from './CardScroller';

const meta: Meta<typeof CardScroller> = {
  title: 'Common/Card/CardScroller',
  component: CardScroller,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

const cards = [
  {
    invitationType: 'SENT' as const,
    title: '보낸 초대장',
    date: '2025-02-16T12:30:00',
    template: 'template',
    sticker: 'sticker',
    font: 'font',
    hostName: '누구누구',
  },
  {
    invitationType: 'RECEIVED' as const,
    title: '받은 초대장',
    date: '2025-02-18T16:30:00',
    template: 'template',
    sticker: 'sticker',
    font: 'font',
  },
  {
    invitationType: 'SENT' as const,
    title: '2줄 케이스! 최대 20글자',
    date: '2025-02-20T12:30:00',
    template: 'template',
    sticker: 'sticker',
    font: 'font',
    hostName: '누구누구',
  },
];

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '400px' }}>
      <CardScroller {...args} />
    </div>
  ),
  args: {
    cards: cards,
  },
};

export const Empty: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <CardScroller cards={[]} />
    </div>
  ),
};
