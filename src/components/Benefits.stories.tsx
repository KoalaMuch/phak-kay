import type { Meta, StoryObj } from '@storybook/react';
import { Benefits } from './Benefits';

const meta: Meta<typeof Benefits> = {
  title: 'Sections/Benefits',
  component: Benefits,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Benefits>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};
