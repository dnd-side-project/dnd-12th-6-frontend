import type { Meta, StoryObj } from '@storybook/react';

import CancelModal from '.';

const meta: Meta<typeof CancelModal> = {
  title: 'Common/Modal/CancelModal',
  component: CancelModal,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <button
        className='w-full h-[100px] flex justify-center items-center bg-white
        typo-body font-medium text-gray-5 underline'
      >
        모임 취소하기
      </button>
    ),
  },
};
