import type { Meta, StoryObj } from '@storybook/react';

import CopyLinkWithAlert from '.';

const meta: Meta<typeof CopyLinkWithAlert> = {
  title: 'Common/CopyLinkWithAlert',
  component: CopyLinkWithAlert,
  argTypes: {
    url: {
      description: '복사할 링크',
    },
    children: {
      description: '클릭시 링크 복사를 트리거하는 컴포넌트',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: 'https://invity-web.vercel.app/',
    children: (
      <button className='w-[400px] px-20 py-[14px] rounded-sm bg-primary-natural text-primary-strong typo-body font-semibold text-center'>
        링크 복사하기
      </button>
    ),
  },
};
