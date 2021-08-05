import React from "react";

const Personslist = ({ contact, handleDelete, ind }) => {
  return (
    <>
      <tr>
        <td>{ind + 1}</td>
        <td>{contact.name}</td>
        <td>{contact.number}</td>
        <td>
          <button
            // className={onClick ? btndel : btnsav}
            className="delbtn"
            value={contact.id}
            onClick={handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Personslist;
