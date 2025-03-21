import type { Meta, StoryObj } from '@storybook/react';

import ResponseCompleteAlert from './ResponseCompleteAlert';

const meta: Meta = {
  title: 'Components/ResponseCompleteAlert',
  component: ResponseCompleteAlert,
  argTypes: {},
} satisfies Meta<typeof ResponseCompleteAlert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    completeType: 'response',
  },
};
