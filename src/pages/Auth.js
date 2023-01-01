import React, { useState, useContext } from "react";
import { useForm } from "../components/hooks/useForm";
import Input from "../components/Input";
import Button from "../components/Button";
import { DataContext } from "../components/DataProvider";
import { Navigate } from "react-router-dom";

const Auth = (props) => {
  const [form, handleChange, setFormData] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { authenticate, setAuthenticate } = useContext(DataContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode);
    if (!isLoginMode) {
      setFormData({ id: "name", value: "" });
    }
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();

    // backend needs to be implemented, for now just set Authenticate always true
    if (isLoginMode) {
      setAuthenticate(true);
      document.getElementById("home").focus();
    }
    console.log(form);
  };

  return (
    <div className="wrapper">
      {authenticate ? (
        <Navigate to="/about-me" />
      ) : (
        <>
          <form
            onSubmit={authSubmitHandler}
            className="small-center-form"
          >
            {!isLoginMode && (
              <Input
                element="input"
                id="name"
                type="text"
                label="Your Name"
                placeholder="Enter your name"
                value={form.name}
                changeHandler={handleChange}
              />
            )}
            <Input
              id="email"
              element="input"
              type="email"
              label="E-mail"
              placeholder="Enter email"
              value={form.email}
              changeHandler={handleChange}
            />
            <Input
              id="password"
              element="input"
              type="password"
              label="Password"
              placeholder="Enter password"
              value={form.password}
              changeHandler={handleChange}
            />
            <Button type="submit">{isLoginMode ? "LOGIN" : "SIGNUP"}</Button>

            <small className="d-flex flex-row-reverse">
              {/* display following words in the same line, small letter and reverse at the end (ie. right)*/}
              <Button
                className="" //overwrite default
                variant="signup-button" // custome made class name for this button
                type="button"
                onClick={switchModeHandler}
              >
                &nbsp;{isLoginMode ? "sign up?" : "sign in?"}
              </Button>
              {isLoginMode ? "Create a new account" : "Already registered"}
            </small>
          </form>
        </>
      )}
    </div>
  );
};
export default Auth;
