// https://reactjs.org/docs/hooks-reference.html
// other reference https://daveceddia.com/usereducer-hook-examples/
import React from "react";

const Input = ({
  containerClassName = "mb-3",
  className = "form-control",
  childrenClassName = "form-control",
  id,
  label,
  changeHandler,
  element, // input or textarea
  type, // text, number, email, password, checkbox
  value,
  placeholder,
  rows = 3,
  children, // any children
  ...rest // catch the rest
}) => {
  const elementObj =
    element === "input" ? (
      <input
        className={className}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        value={value}
        {...rest}
      />
    ) : (
      <textarea
        className={className}
        id={id}
        rows={rows}
        onChange={changeHandler}
        value={value}
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
