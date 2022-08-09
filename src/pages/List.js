import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import Pagination from "../components/Pagination";
import Products from "../components/Products";
import styled from "styled-components";
import Categories from "../components/Categories";

const ListDom = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
`;
const TitleDom = styled.div`
  display: flex;
  color: rgba(255, 56, 92, 1);
  font-size: 18px;
  line-height: 21.6px;
  font-weight: 700;
  padding-left: 1rem;
  width: 100%;
  padding-top: 12px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`;

const List = () => {
  const types = ["diary", "sticker", "notepad", "brush"];
  const categories = [
    { path: "diary", name: "다이어리" },
    { path: "sticker", name: "스티커" },
    { path: "notepad", name: "노트패드" },
    { path: "brush", name: "브러쉬" },
  ];
  const category = useParams().category;
  const [product, setProduct] = useState([]);
  const [title, setTitle] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://test.noutecompany.com/product/list"
      );

      setProduct(
        data.data.filter((p) => p.type === types.indexOf(category) + 1)
      );

      setTitle(types.indexOf(category));
      setCurrentPage(1);
    };
    fetchData();
  }, [category]);

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProducts = (product) => {
    let currentProducts = 0;
    currentProducts = product.slice(firstIndex, lastIndex);
    return currentProducts;
  };
  return (
    <ListDom>
      <Categories categories={categories} />
      <TitleDom>
        <Title>{categories[title].name} </Title> &nbsp;전체보기
      </TitleDom>
      <Products products={currentProducts(product)} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={product.length}
        paginate={setCurrentPage}
      />
      <Outlet />
    </ListDom>
  );
};

export default List;
