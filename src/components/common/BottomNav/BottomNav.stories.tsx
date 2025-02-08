import type { Meta, StoryObj } from '@storybook/react/*';

import { BottomNavList } from '@/store/bottomNavStore';

import BottomNav from '.';

const meta = {
  title: 'Common/BottomNav',
  component: BottomNav,
  argTypes: {},
} satisfies Meta<typeof BottomNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <BottomNav.Item label='메인' tab={BottomNavList.MAIN} icon='home' />
        <BottomNav.Item label='초대장 만들기' tab={BottomNavList.CREATE} icon='message' />
        <BottomNav.Item label='초대장 목록' tab={BottomNavList.LIST} icon='mailbox' />
        <BottomNav.Item label='설정' tab={BottomNavList.SETTING} icon='setting' />
      </>
    ),
  },
};
