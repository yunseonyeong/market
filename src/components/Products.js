import React from "react";
import styled from "styled-components";
import Product from "./Product";

const ProductsDom = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 390px;
  justify-content: flex-start;
  padding: 1rem;
`;

const Products = ({ products }) => {
  return (
    <ProductsDom>
      {products.map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </ProductsDom>
  );
};

export default Products;
