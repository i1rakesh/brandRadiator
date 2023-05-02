import React, { useState } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/contactUs.css'
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, email };
    localStorage.setItem("formData", JSON.stringify(data));
    setName("");
    setEmail("");
  };

  return (
    <div>
    <Navbar/>
    <div className="form-wrapper">
      <h1>Contact Us</h1>
    <form onSubmit={handleSubmit}>
      <div>
        {/* <label>Name:</label> */}
        <input placeholder="Name..." required type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        {/* <label>Email:</label> */}
        <input placeholder="Email..." type="email" name="email" value={email} onChange={handleEmailChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Form;