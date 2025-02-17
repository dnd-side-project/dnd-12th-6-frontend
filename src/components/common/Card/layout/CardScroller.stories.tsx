import type { Meta, StoryObj } from '@storybook/react';

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
    <div style={{ width: '400px' }}>
      <CardScroller {...args} />
    </div>
  ),
  args: {
    cards: [],
  },
};

export const Empty: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <CardScroller cards={[]} />
    </div>
  ),
};
