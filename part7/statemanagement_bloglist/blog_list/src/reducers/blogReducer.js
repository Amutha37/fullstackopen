import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'
import { setNotification } from './notificationReducer'

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    appendBlog(state, action) {
      state.push(action.payload)
    },
    addUpdates(state, action) {
      const blogToUpdate = action.payload
      const { id } = blogToUpdate
      console.log('update', id)
      return state.map((blo) => (blo.id !== id ? blo : blogToUpdate))
    },
    blogDelete(state, action) {
      const id = action.payload
      return state.filter((blog) => blog.id !== id)
    },
    setBlogs(state, action) {
      return action.payload
    },
  },
})

export const { appendBlog, setBlogs, addUpdates, blogDelete } =
  blogSlice.actions

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
  }
}

export const createBlogInfo = (content) => {
  console.log(content)
  return async (dispatch) => {
    try {
      const newBlogInfo = await blogService.create(content)
      dispatch(appendBlog(newBlogInfo))
    } catch (error) {
      dispatch(setNotification(`Error on create blog  : '${error.message}'`, 5))
      console.log(error)
    }
  }
}

export const createComment = (id, commentedBlog) => {
  return async (dispatch) => {
    try {
      const blogComment = await blogService.addComment(id, commentedBlog)
      dispatch(addUpdates(blogComment))
    } catch (error) {
      dispatch(setNotification(` Error on commenting : '${error.message}'`, 5))
    }
  }
}
export const updateNewLikes = (blog) => {
  const blogLiked = {
    ...blog,
    likes: blog.likes + 1,
  }

  const id = blogLiked.id
  // console.log('blogUser', blogLiked, 'id', id, 'bloguserid', blog.user.id)
  const newLike = {
    ...blog,
    likes: blog.likes + 1,
    user: blog.user.id,
  }

  return async (dispatch) => {
    dispatch(addUpdates(blogLiked))
    try {
      await blogService.updateLikes(id, newLike)
    } catch (error) {
      dispatch(
        setNotification(` Error on update likes : '${error.message}'`, 5)
      )
    }
  }
}

export const deleteCurrentBlog = (blogId) => {
  return async (dispatch) => {
    try {
      dispatch(blogDelete(blogId.id))
      await blogService.deleteBlog(blogId.id)
    } catch (error) {
      dispatch(setNotification(`Deleting error : '${error.message}'`, 5))
      console.log(error)
    }
  }
}

export default blogSlice.reducer
