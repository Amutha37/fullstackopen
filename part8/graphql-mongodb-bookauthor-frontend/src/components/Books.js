import React, { useState } from 'react'

import { useQuery } from '@apollo/client'

import { ALL_BOOKS } from '../graphql/queries'

const Books = () => {
  const [selectedGenre, setSelectedGenre] = useState()

  const result = useQuery(ALL_BOOKS)
  const { data, loading, error } = useQuery(ALL_BOOKS, {
    variables: { genre: selectedGenre },
    pollInterval: 500,
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  let allGenres = result.data.allBooks
    .flatMap((b) => b.genres)
    .concat('All Genres')

  //  collect unique genre from the list allgenres
  let uniqueGenres = [...new Set(allGenres)]

  let bookList = data.allBooks

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
          {bookList.map((a, index) => (
            <tr key={index}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id='genresList'>
        <h4>View by Genre</h4>
        {uniqueGenres.map((genre) => (
          <button
            key={genre}
            onClick={() =>
              setSelectedGenre(genre === 'All Genres' ? null : genre)
            }
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Books
