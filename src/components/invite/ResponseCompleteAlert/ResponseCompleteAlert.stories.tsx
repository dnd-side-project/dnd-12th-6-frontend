import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';

import ResponseCompleteAlert from '.';

const meta: Meta<typeof ResponseCompleteAlert> = {
  title: 'Components/ResponseCompleteAlert',
  component: ResponseCompleteAlert,
  argTypes: {
    completeType: {
      control: { type: 'radio' },
      options: ['response', 'edit'],
      description: '응답 완료 유형',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Drawer 열림 여부',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    completeType: 'response',
    open: true,
  },
  render: (args) => {
    const [, updateArgs] = useArgs();

    return (
      <ResponseCompleteAlert
        {...args}
        onClose={() => {
          updateArgs({ open: false });
          console.log('Drawer closed');
        }}
      />
    );
  },
};
