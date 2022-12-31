// https://reactjs.org/docs/hooks-reference.html
// modified version based on "How to Create a Reusable React Form component" by Gerald Ezenagu
import React, { useReducer, useEffect } from "react";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, value: action.val };
    default:
      return state;
  }
};

const Input = ({
  containerClassName = "mb-3",
  className = "form-control",
  childrenClassName = "form-control",
  id,
  label,
  onInput,
  element,
  type, // text, number, email, password, checkbox
  placeholder,
  rows = 3,
  children, // any children
  ...rest // catch the rest
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, { value: "" });

  // const { id, onInput } = props;
  const { value } = inputState;

  // following codes will cause infinite loop!
  // useEffect(() => {
  //   onInput(id, value);
  // }, [id, onInput, value]);

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
    // update onInput handler when data changed
    onInput(id, event.target.value);
  };

  const elementObj =
    element === "input" ? (
      <input
        className={className}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        value={inputState.value}
        {...rest}
      />
    ) : (
      <textarea
        className={className}
        id={id}
        rows={rows}
        onChange={changeHandler}
        value={inputState.value}
        {...rest}
      />
    );
  return (
    <div className={containerClassName}>
      <label htmlFor={id}> {label}</label>
      {elementObj}
      {children && <div className={childrenClassName}>{children}</div>}
    </div>
  );
};

export default Input;
