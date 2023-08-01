import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { styled } from "styled-components";
import Header from "./Header";
import Review from "./Review";

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
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
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

  let reviews;
  if (airlines.included && airlines.included.length > 0) {
    reviews = airlines.included.map((review, index) => {
      return (
        <Review
          key={index}
          title={review.attributes.title}
          description={review.attributes.description}
          score={review.attributes.score}
        />
      );
    });
  }

  return (
    <div>
      <Column>
        {
          loaded && 
          <Header attributes={airline.attributes} />
        }
        <div className="reviews">
          {reviews}
        </div>
      </Column>
      <Column>
        [review form will go here]
      </Column>
    </div>
  );
};
export default Airline;
