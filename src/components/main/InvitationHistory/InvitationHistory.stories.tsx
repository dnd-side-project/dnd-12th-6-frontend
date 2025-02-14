import type { Meta, StoryObj } from '@storybook/react';

import InvitationHistory from '.';

const meta: Meta<typeof InvitationHistory> = {
  title: 'Main/InvitationHistory',
  component: InvitationHistory,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof InvitationHistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className='w-[360px]'>
        <InvitationHistory />
      </div>
    );
  },
};
