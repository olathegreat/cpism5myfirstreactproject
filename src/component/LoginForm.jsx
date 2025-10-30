import React from "react";
import "./LoginForm.css";
const LoginForm = () => {
  return (
    <div className="login-form-body">
      <h3>Login </h3>
      <p>Type in your details to login</p>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
