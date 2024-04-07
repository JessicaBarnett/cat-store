import type { Meta, StoryObj } from '@storybook/react';
import { ProductList } from './ProductList';
import * as demoData from '@data/db.json'
import { Product } from '@customtypes/Product';

const products: Product[] = demoData.products;

const meta = {
  title: 'Components/ProductList',
  component: ProductList,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    products: products
  },
};
