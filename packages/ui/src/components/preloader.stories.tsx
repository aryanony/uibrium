import type { Meta, StoryObj } from '@storybook/react';
import { Preloader } from './preloader';

const meta: Meta<typeof Preloader> = {
  title: 'Components/Preloader',
  component: Preloader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Preloader>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
