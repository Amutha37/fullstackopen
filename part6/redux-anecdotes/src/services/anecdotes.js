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
  const object = { content, votes: 0 }
  const request = await axios
    .post(baseUrl, object)
    .then((response) => response.data)

  return request
  // return response.data
}

const fetchAll = {
  getAll,
  createNew,
}
export default fetchAll
