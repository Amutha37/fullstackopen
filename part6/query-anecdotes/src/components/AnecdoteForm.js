import { useMutation, useQueryClient } from 'react-query'
import { createAnecdote } from '../requests'
import { useCounterDispatch } from '../CounterContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useCounterDispatch()

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      // read data first
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
    },
  })

  const onCreate = (event) => {
    event.preventDefault()

    const content = event.target.anecdote.value

    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({
      content,
      votes: 0,
      id: (100000 * Math.random()).toFixed(0),
    })
    // console.log('new anecdote', content)

    dispatch({ type: 'MES', payload: `Added new anecdote : ${content}` })
    setTimeout(() => {
      dispatch({ type: 'CLE', payload: null })
    }, 5000)
  }

  return (
    <div id='form'>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
