import React from "react";

const Contacts = ({ filteredList, handleDelete }) => {
  // const columns = filteredList[0] && Object.keys(filteredList[0]);
  return (
    <>
      <h2>Numbers</h2>
      <table cellPadding={0} cellSpacing={0}>
        <thead className="sticky-thc">
          <tr>
            {/* {filteredList[0] &&
              columns.map((heading, index) => <th key={index}>{heading}</th>)} */}
            <td>Id</td>
            <td>Name</td>
            <td>Number</td>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((list) => (
            <tr key={list.id}>
              <td>{list.id}</td>
              <td>{list.name}</td>
              <td>{list.number}</td>
              <td>
                {" "}
                <button onClick={handleDelete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Contacts;
