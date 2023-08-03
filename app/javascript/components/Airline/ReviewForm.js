import React from "react";
const ReviewForm = (props) => {
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
