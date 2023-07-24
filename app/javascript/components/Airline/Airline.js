import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const Airline = () => {
  const {airline, setAirline} = useState([]);
  const {review, setReview} = useState([]);
  const {slug} = useParams();
  useEffect(() => {
    const baseUrl = `${window.location.origin}/api/v1`
    const url = `${baseUrl}/airlines/${slug}`;
    axios.get(url)
    .then( (resp) => {
      console.log(resp.data)
      setAirline(resp.data.data)
    })
    .catch( error => {
      console.log("Error fetching data:", error)
    })
  }, [])
  return <div>This is the Airlines#show page for our app.</div>;
};
export default Airline;
