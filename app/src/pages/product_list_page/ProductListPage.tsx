import React from 'react';

import { Filters } from '@components/filters/Filters';
import { ProductList } from '@components/product_list/ProductList';

import './product_list_page.css';

import useProducts from '@hooks/useProducts';

export const ProductListPage: React.FC = () => {
  const { isLoading, products, error } = useProducts();

  return (
    <section className="product-list-page">
      {isLoading ? (
        <span>Loading products...</span>
      ) : error ? (
        <span>{JSON.stringify(error)}</span>
      ) : (
        <>
          <Filters></Filters>
          <ProductList products={products}></ProductList>
        </>
      )}
    </section>
  );
};
