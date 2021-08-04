import React from "react";

const Persons = ({ contact, handleDelete, ind }) => {
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
      <tr>
        <td>{ind + 1}</td>
        <td>{contact.name}</td>
        <td>{contact.number}</td>
        <td>
          <button className="delbtn" onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>
      {/* ))} */}
      {/* </tbody>
    </table> */}
    </>
  );
};

export default Persons;
