import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './radio';
import React from 'react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <label htmlFor="option-one" className="text-sm font-medium leading-none">
          Option One
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <label htmlFor="option-two" className="text-sm font-medium leading-none">
          Option Two
        </label>
      </div>
    </RadioGroup>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-6">
      <RadioGroup defaultValue="primary">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="primary" id="r1" color="primary" />
          <label htmlFor="r1">Primary</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="secondary" id="r2" color="secondary" />
          <label htmlFor="r2">Secondary</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="success" id="r3" color="success" />
          <label htmlFor="r3">Success</label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="d1" />
        <label htmlFor="d1" className="text-sm font-medium leading-none opacity-50">
          Disabled Group Item 1
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="d2" />
        <label htmlFor="d2" className="text-sm font-medium leading-none opacity-50">
          Disabled Group Item 2
        </label>
      </div>
    </RadioGroup>
  ),
};

export const IndividualDisabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="id1" />
        <label htmlFor="id1">Enabled</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="id2" disabled />
        <label htmlFor="id2" className="opacity-50">
          Disabled
        </label>
      </div>
    </RadioGroup>
  ),
};
