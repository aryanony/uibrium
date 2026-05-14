import type { Meta, StoryObj } from '@storybook/react';
import { CustomCursor } from './custom-cursor';

const meta: Meta<typeof CustomCursor> = {
  title: 'Components/CustomCursor',
  component: CustomCursor,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CustomCursor>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
