import React from 'react';
import './product_summary.css';
import Product from '@customtypes/Product';

type ProductSummaryProps = {
  product: Product
}

export const ProductSummary: React.FC<ProductSummaryProps> = (props: ProductSummaryProps) => {
  const { product } = props;
  return (
    <div className="product-summary">
      {/* <img className="product-image" src={product.images[0]}></img> */}
      <h4>{product.name}</h4>
      <p>
        {product.description}
        {product.price}
      </p>
    </div>
  );
};

export default ProductSummary;