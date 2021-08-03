import React from "react";

const Persons = ({ contact, handleDelete }) => {
  // const columns = allContacts[0] && Object.keys(allContacts[0]);
  return (
    <>
      {/* // <table className="dml_table" cellPadding={0} cellSpacing={0}>
    //   <thead className="sticky-thc">
    //     <tr>
         
    //       <td>Id</td>
    //       <td>Name</td>
    //       <td>Number</td>
    //     </tr>
    //   </thead>
    //   <tbody> */}
      {/* {allContacts.map((contact) => ( */}
      <tr key={contact.id}>
        <td>{contact.id}</td>
        <td>{contact.name}</td>
        <td>{contact.number}</td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>
      {/* ))} */}
      {/* </tbody>
    </table> */}
    </>
  );
};

export default Persons;
