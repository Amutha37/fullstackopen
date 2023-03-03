import { useMutation, useQueryClient } from 'react-query'
import { createAnecdote } from '../requests'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      // read data first
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
    },
    // onError: (error) => {
    //   const err = error.response.data
    //   console.log('catch error', err)
    //   console.log(error.response.status)
    // },
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
  }

  return (
    <div id='form'>
      <h3>create new</h3>
      {newAnecdoteMutation.isLoading ? (
        'Adding anecdote...'
      ) : (
        <>
          {newAnecdoteMutation.isError ? (
            <div>
              An error occurred : {''}
              {newAnecdoteMutation.error.response.data.error}
            </div>
          ) : null}

          {newAnecdoteMutation.isSuccess ? <div> added!</div> : null}

          <form onSubmit={onCreate}>
            <input name='anecdote' />
            <button type='submit'>create</button>
          </form>
        </>
      )}
    </div>
  )
}

export default AnecdoteForm
