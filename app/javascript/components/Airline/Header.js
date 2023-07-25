import React from "react";
const Header = (props) => {
  const {name, image_url} = props.attributes;
  return (
    <div className="header">
      <img src="" alt="airline-img" width="50" />
      <h1>[airline name will go here]</h1>
    </div>
  );
};
export default Header;
