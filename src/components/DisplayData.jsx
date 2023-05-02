import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/aboutUs.css'
import profile from '../assets/profile.png'
const DisplayData = () => {
  const formData = JSON.parse(localStorage.getItem("formData"));

  return (
    <div>
      <Navbar/>
      
      <div className="show-data">
      <h2>Your Account Information</h2>
      <img src={profile} alt="" />
      {formData && (
        <ul>
          <li>Name: {formData.name}</li>
          <li>Email: {formData.email}</li>
        </ul>
      )}
      </div>
      <Footer/>
    </div>
  );
};

export default DisplayData;