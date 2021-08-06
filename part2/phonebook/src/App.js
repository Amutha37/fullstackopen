import React, { useState, useEffect, Fragment } from "react";

import PrintContacts from "./components/PrintContacts";
import Notification from "./components/Notification";
import SearchBar from "./components/SearchBar";
import Personform from "./components/Personform";
import "./App.css";
import personsService from "./services/fetchpersons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [filteredList, setfilteredList] = useState([]);

  //  fetch data from json server
  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  // addcontact
  const addContact = (event) => {
    event.preventDefault();

    if (!newName) {
      alert(`Please enter a contact name.`);
    } else {
      let result = preventDoubleName(newName);

      if (result) {
        window.confirm(
          `${result.name} is already added to phonebook. Do you want to change the number?`
        );
        {
          const updatePerson = persons.find(
            (n) => n.name.toLowerCase() === newName.toLowerCase()
          );
          const changedNumber = {
            ...updatePerson,
            number: newNumber,
            date: new Date(),
          };

          personsService
            .update(updatePerson.id, changedNumber)
            .then((returnedPerson) => {
              setPersons(
                persons.map((pers) =>
                  pers.id !== updatePerson.id ? pers : returnedPerson
                )
              );
              setErrorMessage(
                `${updatePerson.name}'s contact was successfully updated.`
              );
              setTimeout(() => {
                setErrorMessage(null);
              }, 5000);
            })
            .catch((error) => {
              setErrorMessage(
                `ERROR!  ${updatePerson.name} has already been removed from server.`
              );
              setTimeout(() => {
                setErrorMessage(null);
              }, 5000);
            });
        }
      } else {
        let lastPosition = persons[persons.length - 1];
        let lastId = lastPosition.id;

        const charcap = characterCapital(newName);

        const newname = {
          id: lastId + 1,
          name: charcap.trim(),
          date: new Date(),
          number: newNumber,
        };
        personsService.create(newname).then((returnedPersons) => {
          setPersons(persons.concat(returnedPersons));
          setErrorMessage(`Added '${returnedPersons.name}'`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
        });
      }
    }
    setNewName("");
    setNewNumber("");
  };
  // First letter of the names set to capital letter
  const characterCapital = (str) => {
    return str
      .split(/ /g)
      .map(
        (word) => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`
      )
      .join(" ");
  };

  // handlenewname and number
  const handleNewName = (event) => setNewName(event.target.value);
  const handleNewNumber = (event) => setNewNumber(event.target.value);

  // Check if user entered the same name

  const preventDoubleName = (samename) =>
    persons.find(({ name }) =>
      name.toLowerCase().includes(samename.toLowerCase().trim())
    );
  // SEARCH BAR TARGET VALUE
  const handlesearch = (event) => {
    setSearchName(event.target.value);

    const filtered = persons.filter((row) =>
      row.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setfilteredList(filtered);
  };

  // handle delete

  const handleDeleteContact = (event) => {
    const btnValue = parseFloat(event.target.value);
    const deletePerson = persons.find((n) => n.id === btnValue);

    if (
      window.confirm(`Do you want to delete ${deletePerson.name}'s contact?`)
    ) {
      if (searchName) {
        setfilteredList(filteredList.filter((n) => n.id !== deletePerson.id));
      } else {
        personsService.delContact(deletePerson.id);
        setPersons(persons.filter((n) => n.id !== deletePerson.id));
      }
    }
  };

  return (
    <Fragment>
      <h2>Phonebook</h2>
      <SearchBar value={searchName} handlesearch={handlesearch} />

      <Personform
        newName={newName}
        newNumber={newNumber}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        addContact={addContact}
      />

      {errorMessage && <Notification message={errorMessage} />}

      {searchName ? (
        <PrintContacts
          contactname={filteredList}
          handleDelete={handleDeleteContact}
        />
      ) : (
        <PrintContacts
          contactname={persons}
          handleDelete={handleDeleteContact}
        />
      )}
    </Fragment>
  );
};

export default App;
