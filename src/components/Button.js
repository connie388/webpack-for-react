import React from "react";
const Button = ({
  type = "button",
  className = "d-grid mw-100 mb-3",
  onClick,
  children,
  variant = "btn btn-primary",
  ...rest // anythings such as disabled, className etc
}) => (
  <div className={className}>
    <button className={variant} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  </div>
);

export default Button;
