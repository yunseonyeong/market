import React, { useState } from "react";
import styled from "styled-components";

const ReviewListDom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  width: 100%;
  padding-bottom: 5px;
`;

const ReviewDom = styled.div`
  width: 100%;
  padding: 16px 0px 16px 0px;
  margin: 0px 16px 0px 16px;
  height: 154px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d2d2d2;
`;

const ReviewIntro = styled.div`
  display: flex;
`;

const ReviewWriter = styled.div`
  font-size: 12px;
  font-weight: 500;
  padding: 0px 8px 0px 16px;
`;

const ReviewDate = styled(ReviewWriter)`
  color: rgba(153, 153, 153, 1);
  padding: 0;
`;

const ReviewContent = styled.div`
  display: flex;
`;

const Review = styled.div`
  padding: 16px 16px 8px 16px;
`;

const ReviewImg = styled.div`
  background-image: url(${(props) => props.src});
  background-size: 82px 82px;
  width: 82px;
  height: 82px;
  border-radius: 8px;
`;

const More = styled.span`
  padding: 0px 16px 0px 16px;
  font-size: 12px;
  text-decoration-line: underline;
  cursor: pointer;
`;

const Reviews = ({ reviews }) => {
  const [more, setMore] = useState(false);
  return (
    <ReviewListDom>
      {reviews &&
        reviews.map((review, i) => (
          <ReviewDom key={i}>
            <ReviewIntro>
              <ReviewWriter>{review.writer}</ReviewWriter>
              <ReviewDate>{review.dateTime}</ReviewDate>
            </ReviewIntro>
            <ReviewContent>
              {review.thumb && <ReviewImg src={review.thumb}></ReviewImg>}
              <Review>
                {review.content.length < 44
                  ? review.content
                  : more
                  ? review.content
                  : review.content.slice(0, 44) + "..."}
              </Review>
            </ReviewContent>
            {review.content.length < 44 ? null : more ? (
              <More
                onClick={() => {
                  setMore(!more);
                }}
              >
                닫기
              </More>
            ) : (
              <More
                onClick={() => {
                  setMore(!more);
                }}
              >
                더보기
              </More>
            )}
          </ReviewDom>
        ))}
    </ReviewListDom>
  );
};

export default Reviews;
