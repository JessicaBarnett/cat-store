import type { Meta, StoryObj } from '@storybook/react';
import { ProductListPage } from './ProductListPage';

const meta = {
  title: 'Pages/ProductListPage',
  component: ProductListPage,
} satisfies Meta<typeof ProductListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'ProductListPage',
  },
};
