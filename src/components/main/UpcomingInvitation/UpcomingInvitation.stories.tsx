import type { Meta, StoryObj } from '@storybook/react';

import UpcomingInvitation from '.';

const meta: Meta<typeof UpcomingInvitation> = {
  title: 'Main/UpcomingInvitation',
  component: UpcomingInvitation,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof UpcomingInvitation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className='w-[360px]'>
        <UpcomingInvitation />
      </div>
    );
  },
};
