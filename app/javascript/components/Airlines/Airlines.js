import axios from "axios";
import { styled } from "styled-components";
import Airline from "./Airline";
import React, { useEffect, useState } from "react";

const Home = styled.div`
  text-align: center;
`;
const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`;
const Subheader = styled.p`
  font-weight: 300;
  font-size: 26px;
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
      <Header>
        <h1>OpenFlights</h1>
        <Subheader>
          Honest, unbiased airline reviews. Share your experience.
        </Subheader>
      </Header>
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
