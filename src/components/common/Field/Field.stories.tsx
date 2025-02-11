import type { Meta, StoryObj } from '@storybook/react';

import Field from '.';
import Input from '../Input';

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
        <Input placeholder='이름 또는 닉네임' />
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
        <Input placeholder='이름 또는 닉네임' />
        <Field.helpText status='error'>에러 메시지</Field.helpText>
      </>
    ),
  },
};

export const InputField: Story = {
  args: {
    children: (
      <>
        <Field.Label>라벨</Field.Label>
        <Input placeholder='이름 또는 닉네임' />
        <Field.helpText>도움말</Field.helpText>
      </>
    ),
  },
};
