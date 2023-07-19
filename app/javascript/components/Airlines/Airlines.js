import React, { useState } from "react";
const Airlines = () => {
  const [airlines, setAirlines] = useState([]);
  return (
    <div className="home">
      <div className="header">
        <h1>OpenFlights</h1>
        <p className="subheader">
          Honest, unbiased airline reviews. Share your experience.
        </p>
      </div>
      <div className="grid">
      AIRLINES GRID GOES HERE
      </div>
    </div>
  );
};
export default Airlines;
