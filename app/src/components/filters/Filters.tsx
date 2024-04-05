import React from 'react';
import './filters.css';

export const Filters: React.FC = (/* Product prop */) => {
  return (
    <div className="filters">
      <h4>Category</h4>
      <h4>Price</h4>
      <h4>Brand</h4>

      {/* <h4>Rating</h4> */}


    </div>
  );
};

export default Filters;