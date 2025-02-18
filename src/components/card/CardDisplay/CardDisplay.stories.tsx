import type { Meta, StoryObj } from '@storybook/react';

import { themeArray, fontArray, stickerArray } from '@/lib/invitation/types';

import CardDisplay from '.';

const meta: Meta<typeof CardDisplay> = {
  title: 'Invitation/CardDisplay',
  component: CardDisplay,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      title: { control: 'text', description: '초대장 제목' },
    },
    theme: {
      control: 'select',
      options: themeArray,
      description: '편지지',
    },
    fontName: {
      control: 'select',
      options: fontArray,
      description: '폰트',
    },
    sticker: {
      control: 'select',
      options: stickerArray,
      description: '스티커',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '초대장 제목을 입력해주세요.',
    theme: 'heart',
    fontName: 'basic',
    sticker: 'sparkle',
  },
  render: (args) => {
    return <CardDisplay {...args} />;
  },
};
