import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/home.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };
  const onPassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
  };
  const onSignup = async () => {
    if (email != "" && password != "") {
      const resp = await fetch(
        `https://3001-4geeksacade-reactflaskh-c6mrxiqfja0.ws-eu47.gitpod.io/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password }),
        }
      );
      const data = await resp.json();
      if (resp.status === 401) {
        alert("Invalid credentials")
        throw "Invalid credentials";
      } else if (resp.status === 400) {
        alert("Usuario ya existe")
        throw "usuario ya existe";
      }
      //
      // save your token in the localStorage
      //also you should set your user into the store using the setStore function
      console.log(resp.status);
      if (resp.status == 201) {
        history.push("/welcome");
      }
    } else {
      alert("Please enter a valid username and/or password.");
    }
  };

  return (
    <div>
      <div className="mt-5">
        <div className="row">
          <div className="col-5 mx-auto my-4">
            <label for="email" className="form-label">
              <strong>Email address</strong>
            </label>
            <input
              onChange={onEmail}
              type="email"
              className="form-control"
              id="emailId"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5 mx-auto my-4">
            <label for="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              onChange={onPassword}
              type="password"
              className="form-control"
              id="passwordId"
              aria-describedby="passwordHelp"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5 mx-auto my-4">
            <button onClick={onSignup} className="btn btn-outline-primary">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
