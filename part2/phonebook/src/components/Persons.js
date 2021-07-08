import React from "react";

const Persons = ({ allContacts }) => {
  const columns = allContacts[0] && Object.keys(allContacts[0]);
  return (
    <table className="dml_table" cellPadding={0} cellSpacing={0}>
      <thead className="sticky-thc">
        <tr>
          {allContacts[0] &&
            columns.map((heading, id) => <th key={id}>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {allContacts.map((contact) => (
          <tr key={contact.Id}>
            <td>{contact.Id}</td>
            <td>{contact.Name}</td>
            <td>{contact.Number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
//     <ol>
//       {allContact.map((contact) => (
//         <li key={contact.Id}>
//           {contact.Name} {contact.Number}
//         </li>
//       ))}
//     </ol>
//   );
// };

export default Persons;
