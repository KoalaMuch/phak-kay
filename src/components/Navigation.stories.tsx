import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const Scrolled: Story = {
  decorators: [
    (Story) => {
      // Simulate scrolled state by adding padding
      return (
        <div style={{ paddingTop: '100vh' }}>
          <Story />
        </div>
      );
    },
  ],
};
