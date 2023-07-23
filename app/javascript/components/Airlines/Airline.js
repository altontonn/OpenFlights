import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
        <Link to={"/" + slug}>view airline</Link>
      </div>
    </div>
  )
}
export default Airline;