import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { Filters } from '@components/filters/Filters';
import { ProductList } from '@components/product_list/ProductList';

import './search_page.css';

import useProducts from '@hooks/useProducts';

export const SearchPage: React.FC = () => {
  const [searchParams ] = useSearchParams();
  const query = searchParams.get('q');

  const useProductsParams = {
    ...( query && {query : query }),
  };

  const { isLoading, products, error } = useProducts(useProductsParams);

  return (
    <section className='search-page'>
      <h3>displaying results for "{query}"</h3>
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
