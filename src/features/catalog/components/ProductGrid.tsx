import React from "react";

interface ProductGridProps {
  children: React.ReactNode;
}

const ProductGrid: React.FC<ProductGridProps> = ({ children }) => {
  return <div className="product-grid">{children}</div>;
};

export default ProductGrid;