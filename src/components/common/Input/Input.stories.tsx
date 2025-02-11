import type { Meta, StoryObj } from '@storybook/react';

import InputRoot from '.';

const meta: Meta<typeof InputRoot> = {
  title: 'Common/Input',
  component: InputRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof InputRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <InputRoot.Input />
      </>
    ),
  },
};
