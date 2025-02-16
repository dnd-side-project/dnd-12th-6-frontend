import type { Meta, StoryObj } from '@storybook/react';

import CardList from './CardList';

const meta: Meta<typeof CardList> = {
  title: 'Common/Card/CardList',
  component: CardList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
    <div className='w-[400px] bg-gray-1'>
      <CardList {...args} />
    </div>
  ),
  args: {
    cards: cards,
  },
};

export const Empty: Story = {
  render: (args) => (
    <div className='w-[400px] bg-gray-1'>
      <CardList {...args} />
    </div>
  ),
  args: {
    cards: [],
  },
};
