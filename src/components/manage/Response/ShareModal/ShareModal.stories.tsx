import type { Meta, StoryObj } from '@storybook/react';

import ShareModal from '.';

const meta: Meta<typeof ShareModal> = {
  title: 'Common/Modal/ShareModal',
  component: ShareModal,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <button className='w-full px-20 py-[18px] text-center bg-gray-7 typo-heading text-white font-semibold'>
        초대장 공유하기
      </button>
    ),
  },
};
