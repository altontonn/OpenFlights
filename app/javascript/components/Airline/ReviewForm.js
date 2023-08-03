import React, { Fragment } from "react";
import { styled } from "styled-components";
const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input
          type="radio"
          value={score}
          checked={props.review.score == score}
          onChange={() => console.log("onChange")}
          name="rating"
          id={`rating-${score}`}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    );
  });
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>Have An Experience with {props.name}? Add Your Review!</div>
        <div>
          <input
            onChange={props.handleChange}
            type="text"
            name="title"
            placeholder="Review Title"
            props={props.review.title}
          />
        </div>
        <div>
          <input
            onChange={props.handleChange}
            type="text"
            name="title"
            placeholder="Review Description"
            props={props.review.description}
          />
        </div>
        <div>
          <div>Rate This Airline</div>
          <div>[Rating options will go here.]</div>
        </div>
        <button type="submit">Create Review</button>
      </form>
    </div>
  );
};
export default ReviewForm;
