import type { Meta, StoryObj } from '@storybook/react';
import { AmbientBackground } from './ambient-background';

const meta: Meta<typeof AmbientBackground> = {
  title: 'Components/AmbientBackground',
  component: AmbientBackground,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AmbientBackground>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
