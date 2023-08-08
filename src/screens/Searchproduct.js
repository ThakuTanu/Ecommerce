import React, { useState, useEffect } from "react";
const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    setFilteredProducts(products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    }));
  }, [searchTerm]);
  return (
    <div>
      <input
        placeholder="Search for products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;