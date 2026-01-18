import type { Meta, StoryObj } from '@storybook/react';
import { Gallery } from './Gallery';

const meta: Meta<typeof Gallery> = {
  title: 'Sections/Gallery',
  component: Gallery,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Gallery>;

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
