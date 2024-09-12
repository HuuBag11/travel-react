import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";

const dataUsers = [
  {
    username: "admin",
    password: "12345",
    name: "Huu Bang",
  },
];

const errors = {
  notUser: "Invalid password or password",
  notMatchPass: "Passwords do not match",
};

const LoginComponent = ({ onSubmit }) => {
  const [mode, setMode] = useState("login");
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "login" ? "signup" : "login"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form elements
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    const fullname = form.fullname?.value;
    const email = form.email?.value;
    const createpassword = form.createpassword?.value;
    const repeatpassword = form.repeatpassword?.value;

    if (mode === "login") {
      const userData = dataUsers.find((user) => user.username === username);
      if (userData) {
        if (userData.password !== password) {
          setErrorMessages({ name: "pass", message: errors.notUser });
        } else {
          setErrorMessages({});
          if (onSubmit) onSubmit();
          navigate("/");
        }
      } else {
        setErrorMessages({ name: "user", message: errors.notUser });
      }
    } else {
      // Register logic
      if (createpassword !== repeatpassword) {
        setErrorMessages({ name: "pass", message: errors.notMatchPass });
        return;
      }
      // Successful registration logic here
      setErrorMessages({});
      setMode("registered");
      navigate("/login");
    }
  };

  return (
    <div>
      <div
        className={`form-block-wrapper form-block-wrapper--is-${mode}`}
      ></div>
      <section className={`form-block form-block--is-${mode}`}>
        <header className="form-block__header">
          <h1>{mode === "login" ? "Welcome back!" : "Sign up"}</h1>
          <div className="form-block__toggle-block">
            <span>
              {mode === "login"
                ? "Don't have an account? Click here!"
                : "Already have an account? Click here!"}
            </span>
            <input id="form-toggler" type="checkbox" onClick={toggleMode} />
            <label htmlFor="form-toggler"></label>
          </div>
        </header>
        <FormContent
          mode={mode}
          onSubmit={handleSubmit}
          errorMessages={errorMessages}
        />
      </section>
    </div>
  );
};

const FormContent = ({ mode, onSubmit, errorMessages }) => {
  const renderErrorMessage = (name) =>
    errorMessages.name === name ? (
      <span className="error">{errorMessages.message}</span>
    ) : null;

  return (
    <form onSubmit={onSubmit}>
      <div className="form-block__input-wrapper">
        <div
          className={`form-group form-group--login ${
            mode === "signup" ? "hidden" : ""
          }`}
        >
          <Input
            type="text"
            id="username"
            name="username"
            label="User Name"
            disabled={mode === "signup"}
          />
          <Input
            type="password"
            id="password"
            name="password"
            label="Password"
            disabled={mode === "signup"}
          />
          {renderErrorMessage("user")}
          {renderErrorMessage("pass")}
        </div>

        <div
          className={`form-group form-group--signup ${
            mode === "login" ? "hidden" : ""
          }`}
        >
          <Input
            type="text"
            id="fullname"
            name="fullname"
            label="Full Name"
            disabled={mode === "login"}
          />
          <Input
            type="email"
            id="email"
            name="email"
            label="Email"
            disabled={mode === "login"}
          />
          <Input
            type="password"
            id="createpassword"
            name="createpassword"
            label="Password"
            disabled={mode === "login"}
          />
          <Input
            type="password"
            id="repeatpassword"
            name="repeatpassword"
            label="Repeat Password"
            disabled={mode === "login"}
          />
          {renderErrorMessage("pass")}
        </div>
      </div>
      <button className="button button--primary full-width" type="submit">
        {mode === "login" ? "Log In" : "Sign Up"}
      </button>
    </form>
  );
};

const Input = ({ id, name, type, label, disabled }) => (
  <input
    className="form-group__input"
    type={type}
    id={id}
    placeholder={label}
    disabled={disabled}
  />
);

export default LoginComponent;
