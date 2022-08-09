import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Dom = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 390px;
  justify-content: center;
`;

const Category = styled(NavLink)`
  cursor: pointer;
  color: black;
  padding: 0px 16px 14px 16px;
  text-decoration: none;
  border-bottom: 3px solid rgba(243, 243, 243, 1);
  &.active {
    border-bottom: 3px solid #ff385c;
  }
  &:hover {
    color: gray;
  }
`;

const Categories = ({ categories }) => {
  return (
    <Dom>
      {categories &&
        categories.map((category) => (
          <>
            <Category
              key={category.path}
              to={`/${category.path}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {category.name}
            </Category>
          </>
        ))}
    </Dom>
  );
};

export default Categories;
