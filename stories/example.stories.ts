import type { Meta, StoryObj } from '@storybook/react';

import { Example } from '../src';

const meta = {
  title: 'Components/Example',
  component: Example,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Exmaple: Story = {
  args: {
    children: 'This is a example component',
  },
};
