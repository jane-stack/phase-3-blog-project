import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setIsLoggedIn, setUser }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);

    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username
      })
    })
    .then(resp => resp.json())
    .then(userData => setUser(userData) )
    history.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <lable name="username">Username </lable>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <lable name="password">Password </lable>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

