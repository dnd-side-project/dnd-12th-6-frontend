import type { Meta, StoryObj } from '@storybook/react';

import CreateInvitationButton from '.';

const meta: Meta<typeof CreateInvitationButton> = {
  title: 'Main/CreateInvitationButton',
  component: CreateInvitationButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof CreateInvitationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className='w-72'>
        <CreateInvitationButton />
      </div>
    );
  },
};
