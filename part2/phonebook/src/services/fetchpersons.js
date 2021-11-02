import axios from 'axios'
// JSON server dev
// const baseUrl = "http://localhost:3001/persons/";
// backend fetch from express
// const baseUrl = 'http://localhost:3001/api/persons'

// backend heroku express
// const baseUrl = `https://quiet-dawn-80146.herokuapp.com/api/persons`;

// production site
// The web domain url is same as the backend as for frontend for this we use the relative url.
const baseUrl = `/api/persons`

// list all contact
const getAll = () => {
  const request = axios.get(baseUrl)

  return request.then((response) => response.data)
}
// add new contact
const create = (newname) => {
  const request = axios.post(baseUrl, newname)
  return request.then((response) => response.data)
}
// update

const update = (iddPerson, changedNumber) => {
  const request = axios.put(`${baseUrl}/${iddPerson}`, changedNumber)
  return request.then((response) => response.data)
}
// delete contact
const delContact = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then((response) => response.data)
}
const fetchAll = {
  getAll,
  create,
  delContact,
  update,
}
export default fetchAll
