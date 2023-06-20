const typeDefs = `

type Mutation {
  addBook(
    author: String!
  title: String!
    published: Int
  genres: [String!]!
  ): Book

editAuthor(
    name: String!
    born: Int
  ): Author

createUser(
    username: String!
    favouriteGenre: String!
  ): User
  login(
    username: String!
    password: String!
  ): Token
}

type Book {
  author: Author!
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

type User {
  username: String!
  favouriteGenre: String!
  id: ID!
}

type Token {
  value: String!
}

  type Query {  
allBooks(author: String, genre: String,): [Book!]!
 allAuthors: [Author!]!
bookCount: Int!
authorCount: Int!
  me:  User
}

 type Subscription {
    bookAdded: Book!
  }
`

module.exports = typeDefs
