import axios from 'axios'
const baseUserUrl = '/api/login'

export const login = async (credentials) => {
  const { username, password } = credentials
  const response = await axios.post(baseUserUrl, { username, password })
  return response.data
}
const loginService = { login }

export default loginService
