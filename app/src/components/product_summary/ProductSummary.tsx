import React from 'react';
import { Link } from 'react-router-dom';

import './product_summary.css';
import Product from '@customtypes/Product';
import { slugify } from '@src/utils/utils';


type ProductSummaryProps = {
  product: Product
}

export const ProductSummary: React.FC<ProductSummaryProps> = (props: ProductSummaryProps) => {
  const { product } = props;
  return (
    <Link className="product-summary" to={`/products/${slugify(product.name)}`}>
      {/* <img className="product-image" src={product.images[0]}></img> */}
      <h4>{product.name}</h4>
      <p>
        {product.description}
        {product.price}
      </p>
    </Link>
  );
};

export default ProductSummary;