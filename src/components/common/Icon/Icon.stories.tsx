import type { Meta, StoryObj } from '@storybook/react';

import Icon from '.';
import * as iconTypes from './lib/index';

const meta = {
  title: 'Common/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: Object.keys(iconTypes),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'home',
    className: 'w-12 h-12',
  },
};
