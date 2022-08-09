import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const ProductDom = styled.div`
  width: 194px;
  height: 292px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const ProductImg = styled.div`
  background-size: 174px 174px;
  width: 174px;
  height: 174px;
  border-radius: 10px;
  background-image: url(${(props) => props.src});
`;

const ProductName = styled.div`
  padding: 1%;
  font-size: 15px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
`;

const ProductBrand = styled.div`
  padding: 1%;
  line-height: 18px;
  font-size: 13px;
  color: gray;
`;

const ProductPrice = styled.div`
  padding: 1%;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 700;
`;

const ProductIntro = styled.div`
  height: 118px;
`;

const Product = ({ product }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    navigate(`${location.pathname}/${url}`);
  };
  return (
    <ProductDom onClick={() => handleNavigate(product.id)}>
      <ProductImg src={product.thumb} />
      <ProductIntro>
        <ProductBrand>{product.brandName}</ProductBrand>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}원</ProductPrice>
      </ProductIntro>
    </ProductDom>
  );
};

export default Product;
