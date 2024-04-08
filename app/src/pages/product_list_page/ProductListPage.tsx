import React from 'react';
import { useParams } from 'react-router-dom';

import { Filters } from '@components/filters/Filters';
import { ProductList } from '@components/product_list/ProductList';

import './product_list_page.css';

import useProducts from '@hooks/useProducts';

export const ProductListPage: React.FC = () => {
  // category page
  const { categoryName } = useParams();

  const useProductsParams = {
    ...( categoryName && {categoryName : categoryName }),
  };
  const { isLoading, products, error } = useProducts(useProductsParams);

  return (
    <section className='product-list-page'>
      {isLoading ? (
        <span>Loading products...</span>
      ) : products ? (
        <>
          <Filters></Filters>
          <ProductList products={products}></ProductList>
        </>
      ) : (
        <span>{JSON.stringify(error)}</span>
      )}
    </section>
  );
};
