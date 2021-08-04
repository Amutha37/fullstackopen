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
        window.confirm(
          `${result.name} is already added to phonebook. Do you want to change the number?`
        );
        {
          const updatePerson = persons.find(
            (n) => n.name.toLowerCase() === newName.toLowerCase().trim()
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
            });
        }
      } else {
        let lastPosition = persons[persons.length - 1];
        let lastId = lastPosition.id;

        const charcap = characterCapital(newName);

        // const chaName = newName.charAt(0).toUpperCase() + newName.slice(1);

        const newname = {
          id: lastId + 1,
          name: charcap.trim(),
          date: new Date(),
          number: newNumber,
        };
        personsService.create(newname).then((returnedPersons) => {
          setPersons(persons.concat(returnedPersons));
          printperson();
        });
      }
      setNewName("");
      setNewNumber("");
    }
  };
  // character set to capital letter
  const characterCapital = (str) => {
    //   const arrOfWords = str.split(" ");
    // const arrOfWordsCased = [];

    // for (let i = 0; i < arrOfWords.length; i++) {
    //   const word = arrOfWords[i];
    //   arrOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    // }

    // return arrOfWordsCased.join(" ");
    return str
      .split(/ /g)
      .map(
        (word) => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`
      )
      .join(" ");
  };
  // characterCapital(newName)
  // handlenewname and number
  const handleNewName = (event) => setNewName(event.target.value);
  const handleNewNumber = (event) => setNewNumber(event.target.value);

  // Check if user entered the same name

  const preventDoubleName = (samename) =>
    persons.find(({ name }) =>
      name.toLowerCase().trim().includes(samename.toLowerCase().trim())
    );

  const handlesearch = (event) => {
    setSearchName(event.target.value);

    const filtered = persons.filter((row) =>
      row.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setfilteredList(filtered);
  };
  // handle delete

  const handleDeleteContact = (id) => {
    const deletePerson = persons.find((n) => n.id === id);

    if (
      window.confirm(`Do you want to delete ${deletePerson.name}'s contact?`)
    ) {
      personsService.delContact(id);
      setPersons(persons.filter((n) => n.id !== id));
    }
  };
  // print persons
  const printperson = () => {
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
            {persons.map((contact, i) => (
              <Persons
                key={i}
                contact={contact}
                ind={i}
                handleDelete={() => handleDeleteContact(contact.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
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
