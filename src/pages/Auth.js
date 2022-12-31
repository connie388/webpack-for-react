import React, { useState } from "react";
import { useForm } from "../components/hooks/form-hook";
import Input from "../components/Input";
import Button from "../components/Button";

const Auth = (props) => {
  const [formState, inputHandler, setFormData] = useForm({
    name: { value: "" },
    email: { value: "" },
    password: { value: "" },
  });

  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData({
        name: undefined,
      });
    } else {
      setFormData({
        ...formState.inputs,
        name: { value: "" },
      });
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form
      onSubmit={authSubmitHandler}
      className="small-center-form container"
    >
      {!isLoginMode && (
        <Input
          element="input"
          id="name"
          type="text"
          label="Your Name"
          placeholder="Enter your name"
          onInput={inputHandler}
        />
      )}
      <Input
        id="email"
        element="input"
        type="email"
        label="E-mail"
        placeholder="Enter email"
        onInput={inputHandler}
      />
      <Input
        id="password"
        element="input"
        type="password"
        label="Password"
        placeholder="Enter password"
        onInput={inputHandler}
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
        </Button>{" "}
        {isLoginMode ? "Create a new account" : "Already registered"}
      </small>
    </form>
  );
};
export default Auth;
