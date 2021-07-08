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
      <div>
        <h2>Add new contact</h2>
        Name: <input value={newName} onChange={handleNewName} />
        Phone Number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Personform;
