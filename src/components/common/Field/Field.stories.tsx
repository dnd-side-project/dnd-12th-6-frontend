import type { Meta, StoryObj } from '@storybook/react';

import Field from '.';
import InputRoot from '../Input';
import NumberInput from '../NumberInput';
import Textarea from '../Textarea';

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
        <Field.Label required>라벨</Field.Label>
        <InputRoot>
          <InputRoot.Input placeholder='이름 또는 닉네임' />
        </InputRoot>
        <Field.HelpText>도움말</Field.HelpText>
      </>
    ),
  },
};

export const Error: Story = {
  args: {
    children: (
      <>
        <Field.Label optional>라벨</Field.Label>
        <InputRoot>
          <InputRoot.Input placeholder='이름 또는 닉네임' />
        </InputRoot>
        <Field.HelpText status='error'>에러 메시지</Field.HelpText>
      </>
    ),
  },
};

export const InputField: Story = {
  args: {
    children: (
      <>
        <Field.Label>라벨</Field.Label>
        <InputRoot>
          <InputRoot.Input placeholder='이름 또는 닉네임' />
        </InputRoot>
        <Field.HelpText>도움말</Field.HelpText>
      </>
    ),
  },
};

export const NumberInputField: Story = {
  args: {
    children: (
      <>
        <Field.Label>라벨</Field.Label>
        <NumberInput />
        <Field.HelpText>도움말</Field.HelpText>
      </>
    ),
  },
};

export const TextareaField: Story = {
  args: {
    children: (
      <>
        <Field.Label>라벨</Field.Label>
        <Textarea placeholder='전달할 메세지를 입력해주세요.' counter />
        <Field.HelpText>도움말</Field.HelpText>
      </>
    ),
  },
};
