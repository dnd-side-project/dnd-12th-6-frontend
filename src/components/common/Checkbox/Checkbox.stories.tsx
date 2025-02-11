import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Checkbox from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'Common/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return <Checkbox {...args} />;
  },
};

export const Checked: Story = {
  args: {},
  render: (args) => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
      <>
        <p className='mb-16'>State : {String(checked)}</p>
        <Checkbox
          checked={checked}
          onCheckedChange={(check) => setChecked(typeof check === 'boolean' && check)}
          {...args}
        />
      </>
    );
  },
};
