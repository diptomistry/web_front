import React, { useState } from "react";

const Register = () => {//function name must start with capital letter because React component names must start with an uppercase letter
  const [name, setName] = useState("");//bydefault value is empty
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // You can perform registration logic using the name, email, and password state variables here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // Example: You might send this data to a backend API for registration
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        value={name}//ensures that the input fields reflect the current state values and any changes to the input fields are captured and managed by React's state
        onChange={handleNameChange}
        placeholder="Enter your name"
      />

      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />

      <input
        className="inputBox"
        type="text"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />

      <button className="btn" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
};

export default Register;

