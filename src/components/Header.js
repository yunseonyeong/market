import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Dom = styled.div`
  width: 390px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <Dom
      onClick={() => {
        navigate("/diary");
      }}
    >
      <img
        src="/logo.png"
        alt="logo"
        width="140px"
        style={{ cursor: "pointer" }}
      />
    </Dom>
  );
};

export default Header;
