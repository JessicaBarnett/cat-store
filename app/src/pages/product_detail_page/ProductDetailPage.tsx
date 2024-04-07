import React from 'react';
import { useParams } from 'react-router-dom';

import './product_detail_page.css';
import ProductDetail from '@src/components/product_detail/ProductDetail';

import useProducts from '@hooks/useProducts';

export const ProductDetailPage: React.FC = () => {
  const { productId } = useParams();

  const { isLoading, product, error } = useProducts({
    productId: productId
  });

  return (
    <section className='product-detail-page'>
    {isLoading ? (
      <span>Loading products...</span>
    ) : product ? (
      <ProductDetail product={product}/>
    ): (
      <span>{JSON.stringify(error)}</span>
    )}
  </section>
  );
};

export default ProductDetailPage;