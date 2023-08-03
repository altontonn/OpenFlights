import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { styled } from "styled-components";
import Header from "./Header";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

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
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
const Main = styled.div`
  padding-left: 60px;
`;
const Airline = () => {
  const [airline, setAirline] = useState({});
  const [reviews, setReviews] = useState([]);
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
      setReviews(response.data.included);
      setLoaded(true);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const airline_id = parseInt(airline.id);
    axios.post('/api/v1/reviews', { ...review, airline_id })
      .then((resp) => {
        const included = [...airline.included, resp.data.data];
        setAirline({ ...airline, included });
      })
      .catch((resp) => console.log(resp));
  };

  let reviewsAll;
  if (reviews && reviews.length > 0) {
    reviewsAll = reviews.map((review, index) => {
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
    <Wrapper>
      <Column>
        <Main>
          {loaded && <Header attributes={airline.attributes} />}
          <div className="reviews">{reviewsAll}</div>
        </Main>
      </Column>
      <Column>
        <ReviewForm
          name={name}
          review={review}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Column>
    </Wrapper>
  );
};
export default Airline;
