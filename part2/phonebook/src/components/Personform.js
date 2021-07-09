import React from "react";

const Personform = ({
  handleNewNumber,
  newNumber,
  newName,
  handleNewName,
  addContact,
}) => {
  return (
    <form onSubmit={addContact}>
      <h2>Add new contact</h2>
      Name:{" "}
      <input
        type="text"
        name="name"
        value={newName}
        onChange={handleNewName}
        placeholder="name..."
        autoComplete="off"
      />
      Phone Number:{" "}
      <input
        autoComplete="off"
        placeholder="phone number..."
        value={newNumber}
        onChange={handleNewNumber}
      />
      <button type="submit">add</button>
      <div className="printInput">
        <p>
          {newName}
          {newNumber}
        </p>
      </div>
    </form>
  );
};

export default Personform;
