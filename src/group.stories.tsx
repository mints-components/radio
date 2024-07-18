import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from './radio';

const meta: Meta<typeof Radio.Group> = {
  title: 'Component/Group',
  component: Radio.Group,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Group: Story = {
  argTypes: {
    value: {
      control: 'radio',
      options: ['aa', 'bb', 'cc', 'dd'],
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ ...props }) => (
    <Radio.Group {...props}>
      <Radio value="aa">aa</Radio>
      <Radio value="bb">bb</Radio>
      <Radio value="cc">cc</Radio>
      <Radio value="dd">dd</Radio>
    </Radio.Group>
  ),
};
