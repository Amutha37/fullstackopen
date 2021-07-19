import React, { useState, useEffect } from "react";
import Contacts from "./components/Contacts";
import Persons from "./components/Persons";
import SearchBar from "./components/SearchBar";
import Personform from "./components/Personform";
import "./App.css";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredList, setfilteredList] = useState([]);

  //  fetch data from json server
  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3003/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "persons");

  // addcontact
  const addContact = (event) => {
    event.preventDefault();
    // prevent user entering same name
    // if (!votes[mostVotes] || selectedVoteCount + 1 > votes[mostVotes]) {
    //   setMostVotes(selected);
    // }
    if (!newName) {
      alert(`Please enter a contact name.`);
    } else {
      let result = preventDoubleName(newName);

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
    }
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
    </div>
  );
};

export default App;
