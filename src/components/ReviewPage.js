import React, { useState } from "react";
import styled from "styled-components";
import Reviews from "./Reviews";
import Pagination from "./Pagination";

const ReviewCount = styled.div`
  font-weight: 700;
  font-size: 18px;
  padding: 16px 0px 16px 0px;
  margin: 0px 16px 0px 16px;
  border-bottom: 1px solid #d2d2d2;
`;
const ReviewDom = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewPage = (props) => {
  const reviewList = props.reviews;
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage, setReviewsPerPage] = useState(4);

  const lastIndex = currentPage * reviewsPerPage;
  const firstIndex = lastIndex - reviewsPerPage;
  const currentReviews = (reviewList) => {
    let currentReviews = 0;
    currentReviews = reviewList.slice(firstIndex, lastIndex);
    return currentReviews;
  };
  return (
    <ReviewDom>
      {reviewList && <ReviewCount>구매평 {reviewList.length}</ReviewCount>}
      {reviewList && <Reviews reviews={currentReviews(reviewList)} />}
      {reviewList && (
        <Pagination
          productsPerPage={reviewsPerPage}
          totalProducts={reviewList.length}
          paginate={setCurrentPage}
        />
      )}
    </ReviewDom>
  );
};

export default ReviewPage;
