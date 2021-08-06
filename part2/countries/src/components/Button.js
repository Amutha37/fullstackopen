import React from "react";

// Button component
const Button = ({ show, name, handleClick, status, oneIndex }) => {
  return (
    <div className="buttonToggle">
      <button
        className={show ? "showing" : "closing"}
        value={name}
        type="submit"
        onClick={handleClick}
      >
        {status[oneIndex] ? "Hide" : "Show"}
      </button>
    </div>
  );
};
export default Button;
