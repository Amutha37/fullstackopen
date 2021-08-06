import React from "react";

// Button component
const Button = ({ value, handleDelete }) => {
  return (
    <>
      <button className="delbtn" value={value} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
export default Button;
