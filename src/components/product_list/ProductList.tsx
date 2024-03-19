import React from 'react';
import ProductSummary from '../product_summary/ProductSummary';
import './product-list.css';

export const ProductList: React.FC = () => {
  return (
    <div className="product-list">
        {'abcdefghijklmnopqrstuvwxyz'.split('').map(() => (
            <ProductSummary /*product={product}*/ />
        ))}
    </div>  );
};

export default ProductList;