import React from "react";
const Airline = (props) => {
  const {name, image_url, slug }= props.attributes;
  return (
    <div className="card">
      <div className="airline-logo">
        <img src={image_url} alt={name} width="50"/>
      </div>
      <div className="airline-name">
        {name}
      </div>
      <div className="link-wrapper">
        <a href={"/" + slug}>view airline</a>
      </div>
    </div>
  )
}
export default Airline;