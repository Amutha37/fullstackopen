import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null
const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = async (newObject) => {
  // authorize token
  const config = {
    headers: { Authorization: token },
  }

  const request = await axios.post(baseUrl, newObject, config)
  // without async
  // return request.then((response) => response.data)
  return request.data
}

const update = async (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  const response = await request
  return response.data
}
// Since the names of the keys and the assigned variables are the same, we can write the object definition with more compact syntax:
// from this to ES6 {
//   getAll: getAll,
//   create: create,
//   update: update
// }
//  to this

const fetchAll = {
  getAll,
  create,
  update,
  setToken,
}
export default fetchAll
