import React from "react";
import styled from "styled-components";

const PageNum = styled.div`
  cursor: pointer;
  width: 24px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageDom = styled.div`
  width: 390px;
  justify-content: center;
  display: flex;
`;

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleClick = (num) => {
    paginate(num);
  };
  return (
    <PageDom>
      {pageNumbers.map((num, i) => (
        <PageNum
          key={i}
          onClick={() => {
            handleClick(num);
          }}
        >
          {num}
        </PageNum>
      ))}
    </PageDom>
  );
};

export default Pagination;
