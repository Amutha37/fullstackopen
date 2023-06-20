import React from 'react'
import { useSubscription } from '@apollo/client'

import { ALL_BOOKS, BOOK_ADDED } from './graphql/queries'

import Menu from './components/Menu'
import { setNotification } from './reducers/notificationReducer'
import { useDispatch } from 'react-redux'

export const updateCache = (cache, query, addedBook) => {
  const uniqByName = (a) => {
    let seen = new Set()
    return a.filter((item) => {
      let k = item.title
      return seen.has(k) ? false : seen.add(k)
    })
  }

  cache.updateQuery(query, ({ allBooks }) => {
    return {
      allBooks: uniqByName(allBooks.concat(addedBook)),
    }
  })
}

const App = () => {
  const dispatch = useDispatch()

  useSubscription(BOOK_ADDED, {
    onData: ({ data, client }) => {
      console.data('subscrition front', data)
      const addedBook = data.data.bookAdded

      dispatch(setNotification(`New book list successfully added.`, 5))
      updateCache(client.cache, { query: ALL_BOOKS }, addedBook)
    },
  })

  return (
    <div>
      <Menu />
    </div>
  )
}

export default App
