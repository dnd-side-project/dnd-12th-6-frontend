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

export const Default: Story = {
  render: (args) => (
    <div className='w-[400px] bg-gray-1'>
      <CardList {...args} />
    </div>
  ),
  args: {
    cards: [],
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
