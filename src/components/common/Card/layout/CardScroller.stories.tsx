import type { Meta, StoryObj } from '@storybook/react';

import { invitationListMockData } from '@/__mock__/data';

import CardScroller from './CardScroller';

const meta: Meta<typeof CardScroller> = {
  title: 'Common/Card/CardScroller',
  component: CardScroller,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className='w-[400px] flex flex-col gap-y-24'>
      <CardScroller {...args} />
    </div>
  ),
  args: {
    cards: invitationListMockData,
  },
};

export const Empty: Story = {
  render: () => (
    <div className='w-[400px]'>
      <CardScroller cards={[]} />
    </div>
  ),
};
