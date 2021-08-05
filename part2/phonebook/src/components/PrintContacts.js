import React from "react";
import Personslist from "./Persons";

const PrintContacts = ({ contactname, handleDelete }) => {
  return (
    <div>
      <table className="dml_table" cellPadding={0} cellSpacing={0}>
        <thead className="sticky-thc">
          <tr>
            <td>Seq.</td>
            <td>Name</td>
            <td>Number</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {contactname.map((contact, i) => (
            <Personslist
              key={i}
              contact={contact}
              ind={i}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrintContacts;
