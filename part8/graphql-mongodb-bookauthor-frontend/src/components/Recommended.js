import React from 'react'
import { useQuery } from '@apollo/client'
import { USER, ALL_BOOKS } from '../graphql/queries'
const Recommended = () => {
  const { data, loading, error } = useQuery(ALL_BOOKS, {
    pollInterval: 500,
  })

  const userResult = useQuery(USER, {
    pollInterval: 100,
  })

  if (error) return <p>Error :()</p>

  if (loading) {
    return <div id='loading'>loading...</div>
  }
  if (userResult.loading) {
    return <div id='loading'>loading...</div>
  }

  if (!userResult.data.me.favouriteGenre) return null
  const myFavourite = userResult.data.me.favouriteGenre

  const books = data.allBooks

  // check for authors favourite genre

  const favouriteGenresBooks = books.filter((book) =>
    book.genres.includes(myFavourite)
  )

  return (
    <div>
      <h3>Recommendations</h3>
      <h5>
        Book list of my favourite genre <em id='favour'>{myFavourite}</em>
      </h5>

      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Published</th>
          </tr>
          {favouriteGenresBooks.map((a, id) => (
            <tr key={id}>
              <td>{a.title}</td>

              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Recommended
