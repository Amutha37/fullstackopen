// import { useMutation } from 'react-query'

const AnecdoteForm = (anecdotes) => {
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote', content)
    // newAnecdoteMutation.mutate({ content, votes: 0 })
  }

  // const newAnecdoteMutation = useMutation(createAnecdote, {
  //   onSuccess: (newAnecdote) => {
  //     // read data first
  //     const anecdotes = queryClient.getQueryData('anecdotes')
  //     queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
  //   },
  // })

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
