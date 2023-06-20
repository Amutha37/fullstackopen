// ! This exercise will not run due to in book schema author now changed to object of author

const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
// GRAphql ISSUE ERROR MESSAGE
const { GraphQLError } = require('graphql')
// let the server create unique ID
const { v1: uuid } = require('uuid')

let authors = [
  {
    name: 'Robert Martin',
    id: 'afa51ab0-344d-11e9-a414-719c6709cf3e',
    born: 1952,
  },
  {
    name: 'Martin Fowler',
    id: 'afa5b6f0-344d-11e9-a414-719c6709cf3e',
    born: 1963,
  },
  {
    name: 'Fyodor Dostoevsky',
    id: 'afa5b6f1-344d-11e9-a414-719c6709cf3e',
    born: 1821,
  },
  {
    name: 'Joshua Kerievsky', // birthyear not known
    id: 'afa5b6f2-344d-11e9-a414-719c6709cf3e',
    born: 0,
  },
  {
    name: 'Sandi Metz', // birthyear not known
    id: 'afa5b6f3-344d-11e9-a414-719c6709cf3e',
    born: 0,
  },
]

/*
 * Suomi:
 * Saattaisi olla järkevämpää assosioida kirja ja sen tekijä tallettamalla kirjan yhteyteen tekijän nimen sijaan tekijän id
 * Yksinkertaisuuden vuoksi tallennamme kuitenkin kirjan yhteyteen tekijän nimen
 *
 * English:
 * It might make more sense to associate a book with its author by storing the author's id in the context of the book instead of the author's name
 * However, for simplicity, we will store the author's name in connection with the book
 *
 * Spanish:
 * Podría tener más sentido asociar un libro con su autor almacenando la id del autor en el contexto del libro en lugar del nombre del autor
 * Sin embargo, por simplicidad, almacenaremos el nombre del autor en conección con el libro
 */

let books = [
  {
    title: 'Clean Code',
    published: 2008,
    author: 'Robert Martin',
    id: 'afa5b6f4-344d-11e9-a414-719c6709cf3e',
    genres: ['refactoring', 'patterns'],
  },
  {
    title: 'Agile software development',
    published: 2002,
    author: 'Robert Martin',
    id: 'afa5b6f5-344d-11e9-a414-719c6709cf3e',
    genres: ['agile', 'patterns', 'design'],
  },
  {
    title: 'Refactoring, edition 2',
    published: 2018,
    author: 'Martin Fowler',
    id: 'afa5de00-344d-11e9-a414-719c6709cf3e',
    genres: ['refactoring'],
  },
  {
    title: 'Refactoring to patterns',
    published: 2008,
    author: 'Joshua Kerievsky',
    id: 'afa5de01-344d-11e9-a414-719c6709cf3e',
    genres: ['refactoring', 'patterns'],
  },
  {
    title: 'Practical Object-Oriented Design, An Agile Primer Using Ruby',
    published: 2012,
    author: 'Sandi Metz',
    id: 'afa5de02-344d-11e9-a414-719c6709cf3e',
    genres: ['refactoring', 'design'],
  },
  {
    title: 'Crime and punishment',
    published: 1866,
    author: 'Fyodor Dostoevsky',
    id: 'afa5de03-344d-11e9-a414-719c6709cf3e',
    genres: ['classic', 'crime'],
  },
  {
    title: 'The Demon ',
    published: 1872,
    author: 'Fyodor Dostoevsky',
    id: 'afa5de04-344d-11e9-a414-719c6709cf3e',
    genres: ['classic', 'revolution'],
  },
]

/*
  you can remove the placeholder query once your first own has been implemented 
*/

const typeDefs = `

type Mutation {
  addBook(
    author: String!
  title: String!
    published: Int
  genres: [String]
  ): Book

addAuthor(
    name: String!
  born: Int
  ): Author
editAuthor(
    name: String!
    born: Int
  ): Author

}
type Book {
  author: String!
  title: String!
    published: Int
    genres: [String]
  id: ID!
  }

 type Author {
  name: String!
born:Int
bookCounts: Int!
  id: ID!
  }



  type Query {  
allBooks(author: String, genre: String,): [Book!]
bookCount: Int!
authorCount: Int!
   allAuthors: [Author!]!
}
`

const resolvers = {
  Query: {
    allBooks: (root, args) => {
      if (!args.genre && !args.author) {
        return books
      }
      // genre and author optional
      const genresCharacters = books.filter((book) => {
        // check for genre only
        if (!args.author && args.genre) {
          return book.genres.includes(args.genre)
        }
        // check for author and genre
        if (args.genre && args.author) {
          if (book.author === args.author)
            return book.genres.includes(args.genre)
        }
        // check for author only
        if (!args.genre && args.author) {
          return book.author === args.author
        }
      })

      return genresCharacters
    },
    // book count
    bookCount: () => books.length,
    // author count
    authorCount: () => authors.length,
    // all authors
    allAuthors: () => {
      const authors = authors.map(({ name, born, id }) => {
        const bookCounts = books.filter((b) => b.author === name).length
        return { name, born, bookCounts, id }
      })
      return authors
    },
  },

  // mutation

  // adding new person of contact
  Mutation: {
    addBook: (root, args) => {
      console.log('args', args)
      if (books.find((p) => p.title === args.title)) {
        throw new GraphQLError('Title must be unique', {
          extensions: {
            code: 'BAD_USER_INPUT',
            invalidArgs: args.author,
          },
        })
      }

      //  author is added in system from new book creation . I will  implement adding in server in later exercise
      let countAut = authors.filter((p) => p.name == args.author).length

      if (countAut === 0) {
        const newAuthor = {
          name: args.author,
          born: 0,
        }

        const author = { ...newAuthor, id: uuid() }

        authors = authors.concat(author)
      }

      // adding new books
      const book = { ...args, id: uuid() }

      books = books.concat(book)
      console.log('books', books)
      return book
    },
    // Edit author
    editAuthor: (root, args) => {
      // since only existing authors are displayed on drop down box the is no need for validation check
      // const author = authors.find((p) => p.name === args.name)

      // if (!author) {
      //   return null
      // }

      const updatedAuthor = { ...author, born: args.born }
      authors = authors.map((p) => (p.name === args.name ? updatedAuthor : p))
      return updatedAuthor
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
