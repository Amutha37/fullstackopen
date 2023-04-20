import { useField } from '../hooks'
import { createComment } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import ListComments from './ListComments'

const CommentForm = ({ blog }) => {
  const [showForm, setShowForm] = useState(false)
  const dispatch = useDispatch()

  const { reset: resetComment, ...comment } = useField('text')

  let { id, comments } = blog
  const handleCommentSubmit = (e) => {
    e.preventDefault()
    const newComment = comment.value.trim()
    writeComment(newComment)
  }

  const handlePreFix = (e) => {
    e.preventDefault()
    const btnText = e.target.innerText
    writeComment(btnText)
  }

  const handleAddComment = (e) => {
    e.preventDefault()
    setShowForm(!showForm)
  }

  const writeComment = (commentToAdd) => {
    dispatch(createComment(id, commentToAdd))

    dispatch(setNotification(`Comment added  : ${commentToAdd}`, 5))
    resetComment()
  }

  const handleReset = (e) => {
    e.preventDefault()
    resetComment()
  }

  if (!comments) {
    comments = []
  }
  return (
    <div>
      <div>
        <h2>Comment </h2>
        <div id='comment_selection'>
          <button
            className='launch'
            type='button'
            value='Haven`t read this yet ..'
            onClick={handlePreFix}
          >
            Haven't read this yet..{' '}
          </button>
          <button className='change' type='button' onClick={handleAddComment}>
            {!showForm ? `Add comment` : `Close Input`}
          </button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleCommentSubmit}>
          <div>
            Leave Comment :
            <input label='comment' {...comment} />
          </div>

          <button>Submit </button>
          <button onClick={handleReset}>Reset</button>
        </form>
      )}

      <div>
        {comments &&
          comments.map((comment, i) => (
            <ListComments comment={comment} key={i} />
          ))}
      </div>
    </div>
  )
}

export default CommentForm
