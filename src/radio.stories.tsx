import type { Meta, StoryObj } from '@storybook/react';

import { Radio as Component } from './radio';

const meta: Meta<typeof Component> = {
  title: 'Component/Radio',
  component: Component,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Radio: Story = {
  args: {
    checked: false,
    disabled: false,
    children: 'This is a radio',
  },
};
