import React from 'react';
const Rating = (props) => {
  const score = (props.score / 5) * 100;
  return (
    <span className="rating-wrapper">
      <span className="rating"></span>
    </span>
  )
}
export default Rating;