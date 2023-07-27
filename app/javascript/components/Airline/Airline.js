import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { styled } from "styled-components";
import Header from "./Header";

const Column = styled.div`
  background: #fff;
  max-width: 50%;
  width: 50%;
  float: left;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll;
  overflow: scroll;
`;
const Airline = () => {
  const [airline, setAirline] = useState([]);
  const [review, setReview] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { slug } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const baseUrl = `${window.location.origin}/api/v1`;
  const url = `${baseUrl}/airlines/${slug}`;
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setAirline(response.data.data);
      setLoaded(true);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Column>
        {loaded && <Header attributes={airline.attributes} />}
        <div className="reviews">[reviews will go here]</div>
      </Column>
      <Column>[new review form will go here]</Column>
    </div>
  );
};
export default Airline;
