import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import group from '../assets/group.png'
import '../styles/aboutUs.css'
const AboutUs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../src/aboutUs.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
   
    <div>
      <Navbar/>
      <div className="heading">
      <h1>About Us</h1>
      <img src={group} alt="" />
      </div>
      <div className="about-data">
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;