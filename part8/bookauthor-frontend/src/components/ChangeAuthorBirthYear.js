import { useState } from 'react'
import { useField } from '../hooks'
import { useMutation } from '@apollo/client'
import { ALL_AUTHORS } from '../queries'

// state management
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

import { EDIT_BIRTH } from '../queries'

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
  const dispatch = useDispatch()
  const [selectedAuthor, setSelectedAuthor] = useState(null)

  const { reset: resetBirth, ...born } = useField('text')

  const [changeBirth] = useMutation(EDIT_BIRTH, {
    refetchQueries: [{ query: ALL_AUTHORS }],
    onError: (error) => {
      const messages = error.graphQLErrors[0].message
      dispatch(setNotification(`Author born date error ${messages} `, 5))
    },
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newBirthYear = {
      name: selectedAuthor,
      born: Number(born.value),
    }

    changeBirth({ variables: newBirthYear })

    resetBirth()
  }

  console.log('allAuthors', allAuthors)
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
          Year Born :
          <Input label='born' {...born} />
        </div>

        <TomatoButton type='submit'>Submit </TomatoButton>
      </form>
    </div>
  )
}

export default ChangeAuthorBirthYear
