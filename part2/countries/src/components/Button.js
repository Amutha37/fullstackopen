import React from "react";

// Button component
const Button = ({ show }) => {
  return (
    <div className="buttonToggle">
      <button type="submit">{show ? "Hide" : "Show"}</button>
    </div>
  );
};
export default Button;
