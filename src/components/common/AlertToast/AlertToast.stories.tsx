import type { Meta, StoryObj } from '@storybook/react';

import AlertToast from '.';

const meta: Meta<typeof AlertToast> = {
  title: 'Common/AlertToast',
  component: AlertToast,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: '글자 수가 초과되었습니다. (최대 20자)',
    isVisible: true,
  },
};
