import { useEffect, useState } from 'react'
import axios from 'axios'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])
  useEffect(() => {
    const getAll = async () => {
      const request = await axios.get(baseUrl)
      return setResources(request.data)
    }
    getAll()
  }, [setResources, baseUrl])

  const create = (resource) => {
    const request = axios.post(baseUrl, resource)
    setResources(...request, request.data)
  }

  const service = {
    create,
  }

  return [resources, service]
}
