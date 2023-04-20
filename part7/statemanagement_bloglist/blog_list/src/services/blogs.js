// import userService from './user'

import axios from 'axios'
const baseUrl = '/api/blogs'

// authorize token

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)

  return response.data
}

const create = async (newObject) => {
  let config = {
    headers: { Authorization: token },
  }
  const request = await axios.post(baseUrl, newObject, config)
  return request.data
}

const updateLikes = async (id, newLike) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.put(`${baseUrl}/${id}`, newLike, config)

  // const response = await axios.get(`${baseUrl}/${newLike.id}`, newLike, config)

  return response.data
}

const addComment = async (id, comment) => {
  // const config = {
  //   headers: { Authorization: token },
  // }
  console.log('addNewComment', comment, 'id', id)
  const response = await axios.post(`${baseUrl}/${id}/comments`, { comment })
  // post(baseUrl, newObject, config)
  console.log('responseComment', response.data)
  return response.data
}

const deleteBlog = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const request = await axios.delete(`${baseUrl}/${id}`, config)
  const response = request
  return response.data
}

// Since the names of the keys and the assigned variables are the same, we can write the object definition with more compact syntax:
// from this to ES6 {
//   getAll: getAll,
//   create: create,
//   update: update
// }
//  to this

const blogService = {
  getAll,
  create,
  updateLikes,
  addComment,
  deleteBlog,
  setToken,
}
export default blogService
