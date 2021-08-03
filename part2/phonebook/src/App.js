import React, { useState, useEffect } from "react";
import Contacts from "./components/Contacts";
import Persons from "./components/Persons";
import SearchBar from "./components/SearchBar";
import Personform from "./components/Personform";
import "./App.css";
import personsService from "./services/fetchpersons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredList, setfilteredList] = useState([]);

  //  fetch data from json server
  useEffect(() => {
    // axios.get("http://localhost:3002/persons").then((response) => {
    //   console.log("promise fulfilled");
    //   setPersons(response.data);
    // });

    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
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
        console.log("effect");
        const newname = {
          id: persons.length + 1,
          name: newName,
          date: new Date(),
          number: newNumber,
        };
        personsService.create(newname).then((returnedPersons) => {
          setPersons(persons.concat(returnedPersons));
          printperson();
          // <Persons
          //   allContact={persons}
          //   handleDelete={() => handleDeleteContact(id)}
        });
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
    persons.find(({ name }) =>
      name.toLowerCase().includes(samename.toLowerCase())
    );

  const handlesearch = (event) => {
    setSearchName(event.target.value);

    const filtered = persons.filter((row) =>
      row.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setfilteredList(filtered);
  };

  // print persons
  const printperson = () => {
    console.log("printperson");
    return (
      <div>
        <table className="dml_table" cellPadding={0} cellSpacing={0}>
          <thead className="sticky-thc">
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Number</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {persons.map((contact) => (
              <Persons
                key={contact.name}
                contact={contact}
                handleDelete={() => handleDeleteContact(contact.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
    // <Person contact={contact} handleDelete={() => handleDeleteContact(contact.id)}/>)
  };
  // handle delete

  const handleDeleteContact = (id) => {
    const deletePerson = persons.find((n) => n.id === id);
    console.log(deletePerson);
    // const changedNote = { ...note, important: !note.important }

    if (
      window.confirm(`Do you want to delete ${deletePerson.name}'s contact?`)
    ) {
      personsService.delContact(id);
      //   .then((returnedPersons) => {
      //   setPersons(
      //     persons.map((person) =>
      //       person.id !== id ? deletePerson : returnedPersons
      //     )
      //   );
      // });

      setPersons(persons.filter((n) => n.id !== id));
      window.open("exit.html", "Thanks for Visiting!");
    }
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
        printperson()
        //   {persons.map(contact =>
        //  <Persons contacts={contact} />)}
      )}
    </div>
  );
};

export default App;
