import type { Meta, StoryObj } from '@storybook/react';

import Tab from '.';

const meta = {
  title: 'Common/Tab',
  component: Tab,
  argTypes: {},
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    active: false,
    children: (
      <>
        <Tab.Text>전체</Tab.Text>
        <Tab.Count />
      </>
    ),
  },
};

export const Active: Story = {
  args: {
    value: '',
    active: true,
    children: (
      <>
        <Tab.Text>전체</Tab.Text>
        <Tab.Count />
      </>
    ),
  },
};

export const NoCount: Story = {
  args: {
    value: '',
    active: true,
    children: (
      <>
        <Tab.Text>전체</Tab.Text>
      </>
    ),
  },
};
