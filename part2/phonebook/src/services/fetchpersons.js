import axios from "axios";
const baseUrl = "http://localhost:3001/persons/";

// list all contact
const getAll = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data);
};
// add new contact
const create = (newname) => {
  const request = axios.post(baseUrl, newname);
  return request.then((response) => response.data);
};
// update

const update = (iddPerson, changedNumber) => {
  const request = axios.put(`${baseUrl}${iddPerson}`, changedNumber);
  return request.then((response) => response.data);
};
// delete contact
const delContact = (id) => {
  const request = axios.delete(`${baseUrl}${id}`);
  return request.then((response) => response.data);
};

export default { getAll, create, delContact, update };
