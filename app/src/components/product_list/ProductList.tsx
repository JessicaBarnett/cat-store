import React from 'react';
import ProductSummary from '@components/product_summary/ProductSummary';
import './product_list.css';

import Product from '@customtypes/Product';

type ProductListProps = {
    products: Product[]
};

export const ProductList: React.FC<ProductListProps> = (props: ProductListProps) => {
    const { products } = props;

    return (
        <div className='product-list'>
            {products.map((product: Product) => (
              <ProductSummary key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;