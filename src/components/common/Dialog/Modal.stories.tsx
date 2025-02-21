import type { Meta, StoryObj } from '@storybook/react';

import ServicePrepareModal from './ServicePrepareModal';

const meta: Meta<typeof ServicePrepareModal> = {
  title: 'Common/Modal/ServicePrepareModal',
  component: ServicePrepareModal,
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
        수정
      </button>
    ),
  },
};
