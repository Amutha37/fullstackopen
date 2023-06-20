import React from 'react'
import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from '../queries'

const Books = () => {
  // const Books = (props) => {

  const result = useQuery(ALL_BOOKS)

  if (!result) return null

  // if (!props.show) {
  //   return null
  // }

  if (result.loading) {
    return <div id='loading'>loading...</div>
  }

  console.log('result BOOKS', result)
  const books = result.data.allBooks

  return (
    <div>
      <h2>Books</h2>

      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
          </tr>
          {books.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div>
        <h4>Genres</h4>
        {uniqueGenres.map((genre) => (
          <button key={genre} onClick={() => handleSelectedGenre(genre)}>
            {genre}
          </button>
        ))}
      </div> */}
    </div>
  )
}

export default Books
