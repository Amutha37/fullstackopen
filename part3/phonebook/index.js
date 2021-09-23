const express = require("express");
const app = express();
//  jason-parser to access data to dd new notes in the request body in JSON format.
app.use(express.json());

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
// fetch all the data
app.get("/api/persons", (request, response) => {
  response.json(persons);
});

// fetch all the data for summary infomation
app.get("/info", (request, response) => {
  const datalength = persons.length;
  const datetime = new Date();
  response.send(
    `<h5>Phonebook has info for ${datalength} people</h5>
    <h6>${datetime}</h6>`
  );
});

// Display single phonebook entry information and if not found set and error status code.

// check for individual id to load from the url to code to filter
app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

// deleting data
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((perperson) => perperson.id !== id);
  console.log(persons);
  response.status(204).end();
});

// add new person

const generateId = () => Math.floor(Math.random() * 100);

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  let autoid = generateId();
  let result = preventDoubleid(autoid);

  if (result) {
    window.confirm(
      `${result.name} is already added to phonebook. Do you want to change the number?`
    );
  }
  const person = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: autoid,
  };

  persons = persons.concat(person);
  console.log(persons.id);
  response.json(persons);
});
// checking status git
// prevent double entry
const preventDoubleid = (sameid) =>
  persons.find(({ id }) => id.includes(sameid));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
