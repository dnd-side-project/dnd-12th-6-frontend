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
        <Field.helpText status='error'>이름을 확인해주세요</Field.helpText>
      </>
    ),
  },
};
