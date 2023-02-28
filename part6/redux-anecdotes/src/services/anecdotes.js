import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  // const response = await axios.get(baseUrl)
  // return response.data
  const request = await axios.get(baseUrl).then((response) => response.data)
  return request
  // return request.then((response) => response.data)
}

const createNew = async (content) => {
  // const getId = () => (100000 * Math.random()).toFixed(0)
  const object = { content, votes: 0, id: (100000 * Math.random()).toFixed(0) }
  console.log('object', object)
  const request = await axios
    .post(baseUrl, object)
    .then((response) => response.data)

  return request
  // return response.data
}

const updateVote = (anecdote) => {
  return axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
}
const fetchAll = {
  getAll: getAll,
  createNew: createNew,
  updateVote: updateVote,
}
export default fetchAll
