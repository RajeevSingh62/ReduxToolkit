import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { registerUser } from "../../redux/Auth/AuthThunk";

const Register = () => {

    const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData))
 
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />
        <select name="role" onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default Register;
