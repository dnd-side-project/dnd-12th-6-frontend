import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/common/Button';

import LoginModal, { LoginModalProps } from '.';

const meta: Meta<LoginModalProps> = {
  title: 'Common/Modal/LoginModal',
  component: LoginModal,
  argTypes: {},
} satisfies Meta<typeof LoginModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    invitationId: 1,
    children: <Button className='px-24 py-12'>Open</Button>,
  },
};
