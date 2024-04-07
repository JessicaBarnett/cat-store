import type { Meta, StoryObj } from '@storybook/react';
import { SearchPage } from './SearchPage';

const meta = {
  title: 'Pages/SearchPage',
  component: SearchPage,
} satisfies Meta<typeof SearchPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'SearchPage',
  },
};
