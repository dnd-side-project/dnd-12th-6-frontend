import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import ResponseBox from './ResponseBox';

const meta: Meta = {
  title: 'Components/ResponseBox',
  component: ResponseBox,
  argTypes: {
    value: { control: false },
    onClick: { control: false },
  },
} satisfies Meta<typeof ResponseBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState('');

    const handleClick = (value: string) => {
      setSelected((prev) => (prev === value ? '' : value));
    };

    return (
      <div className='max-w-[564px]'>
        <ResponseBox value={selected} onClick={handleClick} />
      </div>
    );
  },
};
