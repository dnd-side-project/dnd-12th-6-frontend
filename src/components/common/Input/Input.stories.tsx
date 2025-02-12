import type { Meta, StoryObj } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import InputRoot from '.';
import Icon from '../Icon';

const meta: Meta<typeof InputRoot> = {
  title: 'Common/Input',
  component: InputRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof InputRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <InputRoot.Input placeholder='플레이스 홀더' />
      </>
    ),
  },
};

export const Apply: Story = {
  args: {},
  render: () => {
    const [text, setText] = useState('입력 값');

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setText(value);
    };

    return (
      <InputRoot>
        <InputRoot.Input value={text} onChange={handleChangeText} />
        {text && <Icon name='check_circle' className='w-[22px] h-[22px] text-primary-strong' />}
      </InputRoot>
    );
  },
};
