import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const Airline = () => {
  const { airline, setAirline } = useState([]);
  const { review, setReview } = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    const baseUrl = `${window.location.origin}/api/v1`;
    const url = `${baseUrl}/airlines/${slug}`;
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);
        setAirline(resp.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="column">
        <div className="header">
          <img src="" alt="airline-img" width="50" />
          <h1>[airline name will go here]</h1>
        </div>

        <div className="reviews">[reviews will go here]</div>
      </div>
      <div className="column">[new review form will go here]</div>
    </div>
  );
};
export default Airline;
