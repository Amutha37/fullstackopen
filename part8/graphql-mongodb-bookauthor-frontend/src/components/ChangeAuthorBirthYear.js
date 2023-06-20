import { useState, useEffect } from 'react'
import { useField } from '../hooks'
import { useMutation } from '@apollo/client'

import { useNavigate } from 'react-router-dom'

// state management
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

import { EDIT_BIRTH } from '../graphql/mutations'

import styled from 'styled-components'
import Select from 'react-select'

const Button = styled.button`
  background: Bisque;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid Chocolate;
  border-radius: 3px;
`

const Input = styled.input`
  margin: 0.25em;
`
const TomatoButton = styled(Button)`
  background: tomato;
`

const ChangeAuthorBirthYear = (allAuthors) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [selectedAuthor, setSelectedAuthor] = useState(null)

  // const { reset: resetName, ...name } = useField('text')
  const { reset: resetBirth, ...born } = useField('text')

  const [changeBirth, result] = useMutation(EDIT_BIRTH)

  useEffect(() => {
    if ((result.data && result.data.editAuthor) === null) {
      dispatch(setNotification(`Person not found `, 5))
    }
  }, [result.data]) // eslint-disable-line

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newBirthYear = {
      name: selectedAuthor,
      born: Number(born.value),
    }

    changeBirth({ variables: newBirthYear })

    navigate('/authors')
    resetBirth()
  }

  // filter all authors
  const options = []

  allAuthors.allAuthors.forEach((author) =>
    options.push({
      value: author.name,
      label: author.name,
    })
  )

  const handleChange = (e) => {
    setSelectedAuthor(e.label)
  }

  return (
    <div>
      <h2>Change Birth Year</h2>

      <form onSubmit={handleSubmit}>
        <Select
          options={options}
          onChange={handleChange}
          label={selectedAuthor}
        ></Select>

        <div>
          Year of birth :
          <Input label='born' {...born} />
        </div>

        <TomatoButton type='submit'>Submit </TomatoButton>
      </form>
    </div>
  )
}

export default ChangeAuthorBirthYear
