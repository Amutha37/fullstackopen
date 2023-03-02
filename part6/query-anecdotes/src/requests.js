import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = () => axios.get(baseUrl).then((res) => res.data)

export const createAnecdote = (newAnecdote) =>
  axios.post(baseUrl, newAnecdote).then((res) => res.data)

export const updateVote = (anecdote) => {
  return axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
}
