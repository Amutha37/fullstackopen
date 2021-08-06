import React from "react";
import Button from "./Button";

const Personslist = ({ contact, handleDelete, ind }) => {
  return (
    <>
      <tr>
        <td>{ind + 1}</td>
        <td>{contact.name}</td>
        <td>{contact.number}</td>
        <td>
          <Button value={contact.id} handleDelete={handleDelete} />
        </td>
      </tr>
    </>
  );
};

export default Personslist;
