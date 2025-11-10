import React, { useEffect, useState } from "react";
import "./LoginForm.css";
const LoginForm = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitFunction = (e) => {
    e.preventDefault();
    alert("form submitted");
    // console.log("form has been submitted");
  }

  // useEffect(() => {
  //   console.log("something new is happening");


  // }); run when page is rendered and also when there is any change in the component


  // useEffect(() => {
  //   console.log("something new is happening");


  // }, []); run once only when the page is rendered

  

  useEffect(() => {
    console.log("something new is happening");


  }, [username]); //run when component is rendered and also when the parameter changes 




  return (
    <div className="login-form-body">
      <h3>{props.header} </h3>
      <p>{ props.messageToDisplay}</p>
      <form onSubmit={onSubmitFunction}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
           
            onChange={(e) => {

              setUsername(e.target.value);
              console.log(username);
              
            }}
            value={username}
          
            type="text"
            id="username"
            name="username"
            required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            // onChange={(e) => console.log("user is now typing")}
               
            onChange={(e) => {

              setPassword(e.target.value);
              console.log(password)
              
            }}
           
            value={password}
            type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
