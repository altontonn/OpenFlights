import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./Header";
const Airline = () => {
  const [ airline, setAirline ] = useState([]);
  const [ review, setReview ] = useState([]);
  const [ loaded, setLoaded ] = useState(false);
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
  }

  return (
    <div>
      <div className="column">
        {
          loaded &&
          <Header attributes={airline.attributes} />
        }
        <div className="reviews">[reviews will go here]</div>
      </div>
      <div className="column">[new review form will go here]</div>
    </div>
  );
};
export default Airline;
