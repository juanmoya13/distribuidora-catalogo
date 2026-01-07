import React from "react";
import { Product } from "../catalog.types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      />
      <h2 className="font-sans text-xl font-bold text-teal-500 mt-4">
        {product.name}
      </h2>
      <p className="text-gray-700 text-base font-light mt-2">
        ${product.price}
      </p>
    </div>
  );
};

export default ProductCard;