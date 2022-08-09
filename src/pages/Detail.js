import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import ReviewPage from "../components/ReviewPage";

const ProductImg = styled.div`
  background-image: url(${(props) => props.src});
  background-size: 390px 390px;
  width: 100%;
  height: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailDom = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const ContourBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #f3f3f3;
  margin-top: 12px;
`;

const ProductBrand = styled.div`
  color: gray;
  padding-top: 12px;
  margin-left: 16px;
  margin-right: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #d2d2d2;
`;

const ProductName = styled.span`
  margin-top: 12px;
  margin-left: 16px;
  margin-right: 16px;
  font-size: 18px;
  font-weight: 700;
`;

const ButtonDom = styled.div`
  display: flex;
  width: 100%;
  height: 46px;
  justify-content: center;
`;

const Button = styled.div`
  display: flex;
  width: 130px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  color: ${(props) => (props.isClicked ? "#FF385C" : "black")};
  border-bottom: ${(props) =>
    props.isClicked ? "3px solid #FF385C" : "3px solid #f3f3f3"};
  cursor: pointer;
`;

const ProductPrice = styled(ProductName)``;

const Detail = () => {
  const params = useParams().id;
  const [details, setDetails] = useState({});
  const [isClicked, setIsClicked] = useState([false, true, false]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://test.noutecompany.com/product/detail/${params}`
      );

      setDetails(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(details);

  const handleClick = (i) => {
    let copy = [false, false, false];
    copy[i] = true;
    setIsClicked(copy);
  };

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <DetailDom>
      <ProductImg src={details.thumb} />
      <ProductBrand>{details.brandName}</ProductBrand>
      <ProductName>{details.name}</ProductName>
      <ProductPrice>{details.price}원</ProductPrice>
      <ContourBar />
      <ButtonDom>
        <Button
          onClick={() => {
            handleClick(0);
          }}
          isClicked={isClicked[0]}
        >
          상세정보
        </Button>
        <Button
          onClick={() => {
            handleClick(1);
          }}
          isClicked={isClicked[1]}
        >
          구매평({details.review && details.review.length})
        </Button>
        <Button
          onClick={() => {
            handleClick(2);
          }}
          isClicked={isClicked[2]}
        >
          Q&A
        </Button>
      </ButtonDom>
      {isClicked[1] === true ? <ReviewPage reviews={details.review} /> : null}
    </DetailDom>
  );
};

export default Detail;
