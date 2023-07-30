import React from "react";
import { styled } from "styled-components";
const Card = styled.div``;
const Title = styled.div``;
const Description = styled.div``;
const Review = (props) => {
  return (
    <div className="review-card">
      <div className="review-title">title will go here</div>
      <div className="review-description">title will go here</div>
      <div className="review-rating">rating will go here</div>
    </div>
  );
};
export default Review;
