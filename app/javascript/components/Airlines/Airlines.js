import axios from "axios";
import { styled } from "styled-components";
import Airline from "./Airline";
import React, { useEffect, useState } from "react";
const Home = styled.div`
  text-align: center;
`;
const Airlines = () => {
  const [airlines, setAirlines] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const baseUrl = `${window.location.origin}/api/v1`;
  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/airlines`);
      setAirlines(response.data.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  return (
    <Home>
      <div className="header">
        <h1>OpenFlights</h1>
        <p className="subheader">
          Honest, unbiased airline reviews. Share your experience.
        </p>
      </div>
      <div className="grid">
        <ul>
          {airlines.map((airline, index) => (
            <Airline key={index} attributes={airline.attributes} />
          ))}
        </ul>
      </div>
    </Home>
  );
};
export default Airlines;
