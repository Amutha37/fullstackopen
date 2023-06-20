import React from 'react'
import { useQuery } from '@apollo/client'
import { ALL_AUTHORS } from '../queries'
import ChangeAuthorBirthYear from './ChangeAuthorBirthYear'

// const Authors = (token) => {

const Authors = () => {
  // const Authors = (props) => {
  const result = useQuery(ALL_AUTHORS)

  if (result.loading) {
    return <div id='loading'>loading...</div>
  }
  console.log('authors result', result)
  const authors = result.data.allAuthors

  return (
    <div>
      <h2>Authors</h2>

      <table>
        <tbody>
          <tr>
            <th>Author</th>
            <th>Born</th>
            <th>Books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCounts}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* birth year change form  */}
      {/* {token && <ChangeAuthorBirthYear allAuthors={authors} />} */}
      <ChangeAuthorBirthYear allAuthors={authors} />
    </div>
  )
}

export default Authors
