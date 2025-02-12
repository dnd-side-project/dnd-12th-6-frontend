import type { Meta, StoryObj } from '@storybook/react';
import { ChangeEvent, useRef, useState } from 'react';

import InputRoot from '.';
import Icon from '../Icon';
import NumberInput from '../NumberInput';

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

export const NumberType: Story = {
  args: {},
  render: () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <div className='min-w-30'>
        <NumberInput ref={inputRef} min={1} max={20} />
        <button
          onClick={() => {
            alert(inputRef.current?.value);
          }}
        >
          check
        </button>
      </div>
    );
  },
};
