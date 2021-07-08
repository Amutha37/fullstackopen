import React from "react";

const Contacts = ({ filteredList }) => {
  const columns = filteredList[0] && Object.keys(filteredList[0]);
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead className="sticky-thc">
        <tr>
          {filteredList[0] &&
            columns.map((heading, id) => <th key={id}>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {/* <ol>  */}
        {filteredList.map((list, Id) => (
          <tr key={list.Id}>
            {/* <li key={list.number}> */}
            <td>{list.Id}</td>
            <td>{list.Name}</td>
            <td>{list.Number}</td>
            {/* <li/> */}
          </tr>
        ))}
        {/* <ol/> */}
      </tbody>
    </table>
  );
};

export default Contacts;
