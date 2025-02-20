import type { Meta, StoryObj } from '@storybook/react';

import DeleteModal from '.';

const meta: Meta<typeof DeleteModal> = {
  title: 'Common/Modal/DeleteModal',
  component: DeleteModal,
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
        내역 삭제하기
      </button>
    ),
  },
};
