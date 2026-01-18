import type { Meta, StoryObj } from '@storybook/react';
import { Rooms } from './Rooms';

const meta: Meta<typeof Rooms> = {
  title: 'Sections/Rooms',
  component: Rooms,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Rooms>;

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
