import React from 'react';
import { useParams, useSearchParams } from "react-router-dom";


import { Filters } from '@components/filters/Filters';
import { ProductList } from '@components/product_list/ProductList';

import './product_list_page.css';

import useProducts from '@hooks/useProducts';

export const ProductListPage: React.FC = () => {
  const { category } = useParams();
  const [searchParams ] = useSearchParams();
  const query = searchParams.get('query');

  const useProductsParams = {
    ...( category && {category : category }),
    ...( query && {query : query }),
  };
  const { isLoading, products, error } = useProducts(useProductsParams);

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
