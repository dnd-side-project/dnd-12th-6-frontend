import type { Meta, StoryObj } from '@storybook/react';

import Textarea from '.';

const meta: Meta<typeof Textarea> = {
  title: 'Common/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    placeholder: '전달할 메시지를 입력해주세요.',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Counter: Story = {
  args: { counter: true },
};
