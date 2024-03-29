import React from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getAll, updateVote } from '../requests'
import { useAnecdoteDispatch } from '../AnecdoteContext'

const AnecdoteList = () => {
  const queryClient = useQueryClient()
  const dispatch = useAnecdoteDispatch()

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
    // console.log('vote', anecdote)

    dispatch({ type: 'MES', payload: `Voted for : ${anecdote.content}` })
    setTimeout(() => {
      dispatch({ type: 'CLE', payload: null })
    }, 5000)
  }

  const updateAnecdoteMutation = useMutation(updateVote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    },
  })

  const { data, isError, isLoading } = useQuery('anecdotes', getAll, {
    retry: 1,
  })

  if (isLoading) {
    return <div>loading data...</div>
  }
  if (isError) {
    return (
      <span>
        Error : {`anecdote service not available due to problem in server`}
      </span>
    )
  }

  const anecdotes = data

  // ? above
  let sortVotes = (a, b) => b.votes - a.votes

  anecdotes.sort(sortVotes)

  return (
    <div>
      <ol>
        {anecdotes.map((anecdote) => (
          <div key={anecdote.id}>
            <li>
              <div>{anecdote.content}</div>
              <div>
                has {anecdote.votes}
                <button
                  type='VOT'
                  onClick={() => {
                    handleVote(anecdote)
                  }}
                >
                  vote
                </button>
              </div>
            </li>
          </div>
        ))}
      </ol>
    </div>
  )
}

export default AnecdoteList
