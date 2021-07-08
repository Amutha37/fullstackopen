import React, { useState } from "react";
import Contacts from "./components/Contacts";
import Persons from "./components/Persons";
import SearchBar from "./components/SearchBar";
import Personform from "./components/Personform";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    {
      Id: 1,
      Name: "Arto Hellas",
      Number: "0678945342",
    },
    {
      Id: 2,
      Name: "Stella Hellas",
      Number: "0678943342",
    },
    {
      Id: 3,
      Name: "Ashaa George",
      Number: "0678946633",
    },
    {
      Id: 4,
      Name: "Kishen George",
      Number: "0678945533",
    },
    {
      Id: 5,
      Name: "Thenaan",
      Number: "0678948897",
    },
    {
      Id: 6,
      Name: "Thylor ",
      Number: "0672194887",
    },
    {
      Id: 7,
      Name: "William George",
      Number: "0672881947",
    },
    {
      Id: 8,
      Name: "George  David",
      Number: "0672687831",
    },
  ]);
  const [searchName, setSearchName] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredList, setfilteredList] = useState([]);

  // addcontact
  const addContact = (event) => {
    event.preventDefault();
    // prevent user entering same name
    const result = preventDoubleName(newName);

    if (result) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newname = {
        Id: persons.length + 1,
        Name: newName,
        Number: newNumber,
      };
      setPersons(persons.concat(newname));
      <Persons allContact={persons} />;
    }
    setNewName("");
    setNewNumber("");
  };

  // handlenewname and number
  const handleNewName = (event) => setNewName(event.target.value);
  const handleNewNumber = (event) => setNewNumber(event.target.value);

  // Check if user entered the same name

  const preventDoubleName = (samename) =>
    persons.find(({ Name }) =>
      Name.toLowerCase().includes(samename.toLowerCase())
    );

  const handlesearch = (event) => {
    setSearchName(event.target.value);

    const filtered = persons.filter((row) =>
      row.Name.toLowerCase().includes(searchName.toLowerCase())
    );

    setfilteredList(filtered);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar value={searchName} handlesearch={handlesearch} />

      <Personform
        newName={newName}
        newNumber={newNumber}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        addContact={addContact}
      />

      {searchName ? (
        <Contacts filteredList={filteredList} />
      ) : (
        <Persons allContacts={persons} />
      )}

      <p>
        {newName}
        {newNumber}
      </p>
    </div>
  );
};

export default App;
