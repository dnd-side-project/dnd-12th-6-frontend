import type { Meta, StoryObj } from '@storybook/react';

import Field from '.';

const meta = {
  title: 'Common/Field',
  component: Field,
  argTypes: {},
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Field.Label>라벨</Field.Label>
        <input className='border' />
        <Field.helpText>도움말</Field.helpText>
      </>
    ),
  },
};

export const Error: Story = {
  args: {
    children: (
      <>
        <Field.Label>라벨</Field.Label>
        <input className='border' />
        <Field.helpText status='error'>에러 메시지</Field.helpText>
      </>
    ),
  },
};
