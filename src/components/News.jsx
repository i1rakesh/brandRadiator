import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/news.css";
import HashLoader from 'react-spinners/HashLoader';
const baseURL =
  "https://newsdata.io/api/1/news?apikey=pub_202515120a1c12e9d6904d1075877418c32c6&country=in&language=en&category=entertainment,politics,sports,technology";

const NewsData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.results);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return(
    <div className="loader">
        <HashLoader/> 
    </div> 
    )
  }

  return (
    <div className="newsWrapper">
      <h1>Latest News</h1>
      {data.map((value) => {
        return (
          <div className="card">
            <img src={value.image_url} alt="Failed to load image" />
            <div className="card-data">
              <h1>{value.title}</h1>
              <p>{value.description}</p>
              <a href={value.link}>Link</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsData;