import axios from "axios";
import React, { useEffect, useState } from "react";
const Airlines = () => {
  const [airlines, setAirlines] = useState([]);
  useEffect(() => {
    axios.get("/api/v1/airlines")
      .then((resp) => {
        console.log(resp.data)
        setAirlines(resp.data);
      })
      .catch((error) => {
        console.log("Error fetching airlines data:", error);
      });
  }, []);

  const grid = airlines.map((airline, index) => (
    <li key={index}>{airline.data.attributes.name}</li>
  ));

  return (
    <div className="home">
      <div className="header">
        <h1>OpenFlights</h1>
        <p className="subheader">
          Honest, unbiased airline reviews. Share your experience.
        </p>
      </div>
      <div className="grid">
        <ul>
          {grid}
        </ul>
      </div>
    </div>
  );
};
export default Airlines;
