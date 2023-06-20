// subcription
const { PubSub } = require('graphql-subscriptions')
const pubsub = new PubSub()

// GRAphql ISSUE ERROR MESSAGE
const { GraphQLError } = require('graphql')
// token and user
const jwt = require('jsonwebtoken')

const Book = require('./models/book')
require('dotenv').config()
const Author = require('./models/author')
const User = require('./models/user')

const resolvers = {
  Query: {
    allBooks: async (root, args) => {
      //   check for author first then if genre included else just genre else all book list
      if (args.author) {
        const authorExist = await Author.findOne({ name: args.author })

        if (authorExist && args.genre) {
          return await Book.find({
            author: authorExist.id,
            genres: { $in: [args.genre] },
          }).populate('author')
        }
        return Book.find({ author: { $in: authorExist.id } }).populate('author')
      } else if (args.genre) {
        return Book.find({ genres: { $in: args.genre } }).populate('author')
      } else {
        return await Book.find({}).populate('author')
      }
    },
    // book count

    bookCount: async () => Book.collection.countDocuments(),

    // author count
    authorCount: async () => Author.collection.countDocuments(),
    // all authors
    allAuthors: async () => await Author.find({}),

    // current user
    me: (root, args, context) => {
      // if (context.currentUser) {
      return context.currentUser
      // }
    },
  },

  // Querry resolver ends here

  Author: {
    bookCounts: async (root) => {
      const authorExist = await Author.findOne({ name: root.name })
      const booksFound = await Book.find({ author: authorExist.id })
      return booksFound.length
    },
  },

  Mutation: {
    addBook: async (root, args, context) => {
      //  checking for current user
      const currentUser = context.currentUser
      console.log('currentUser', currentUser)
      // if (!currentUser) {
      //       throw new GraphQLError('not authenticated', {
      //         extensions: {
      //           code: 'BAD_USER_INPUT',
      //         },
      //       })
      //     }

      console.log('args', args)
      //  author is added in system from new book creation . I will  implement adding in server in later exercise
      let authorFound = await Author.findOne({ name: args.author })

      let bookFound = await Book.findOne({ title: args.title })

      if (bookFound) {
        throw new GraphQLError(
          'This book already exist make sure title is unique',
          {
            extensions: {
              code: 'BAD_USER_INPUT',
              invalidArgs: args.author,
            },
          }
        )
      }

      //  book length validation check

      if (args.title.length < 5) {
        throw new GraphQLError(
          'Book title  is too short minimum length should be 5.',
          {
            extensions: {
              code: 'BAD_USER_INPUT',
              invalidArgs: args.title,
            },
          }
        )
      }

      // validate year

      const currentYear = new Date().getFullYear()
      const yearValidation = currentYear - args.published

      if (yearValidation < 0) {
        throw new GraphQLError(
          'Invalid published year, check the validity of the published year.',
          {
            extensions: {
              code: 'BAD_USER_INPUT',
              invalidArgs: args.name,
            },
          }
        )
      }

      if (!authorFound) {
        if (args.author.length < 4) {
          throw new GraphQLError(
            'Author name is too short minimum length should be 4.',
            {
              extensions: {
                code: 'BAD_USER_INPUT',
                invalidArgs: args.author,
              },
            }
          )
        }

        authorFound = new Author({ name: args.author, born: 0 })

        const author = authorFound

        try {
          await author.save()
        } catch (error) {
          throw new GraphQLError(
            `Saving author error "$
{error}`,
            {
              extensions: {
                code: 'BAD_USER_INPUT',
                invalidArgs: args.author.error,
              },
            }
          )
        }
      }

      // adding new books
      let newAuthorFound = await Author.findOne({ name: args.author })

      const book = new Book({ ...args, author: newAuthorFound })

      try {
        await book.save()
      } catch (error) {
        throw new GraphQLError('Saving book failed', {
          extensions: {
            code: 'BAD_USER_INPUT',
            invalidArgs: args.name,
            error,
          },
        })
      }

      pubsub.publish('BOOK_ADDED', { bookAdded: book })

      return book
    },

    // Edit author
    editAuthor: async (root, args, context) => {
      // checking for current user
      const currentUser = context.currentUser

      if (!currentUser) {
        throw new GraphQLError('not authenticated', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        })
      }
      // since only existing authors are displayed on drop down box the is no need for validation check
      if (args.name.length < 4) {
        throw new GraphQLError('Min character length should be 4', {
          extensions: {
            code: 'BAD_USER_INPUT',
            invalidArgs: args.name,
          },
        })
      }
      let authorExist = await Author.findOne({ name: args.name })

      if (!authorExist) return null

      if (args.born) {
        const birth = args.born.toString()

        if (birth.length < 4 || birth.length > 4) {
          throw new GraphQLError('Length of the year should be 4 digits.', {
            extensions: {
              code: 'BAD_USER_INPUT',
              invalidArgs: args.name,
            },
          })
        }

        const currentYear = new Date().getFullYear()
        const yearValidation = currentYear - birth

        if (yearValidation < 0 || yearValidation === 0 || yearValidation < 10) {
          throw new GraphQLError(
            'Invalid year born entered, year born should be earlier than curent year or at least 10 years in old when writing the book.',
            {
              extensions: {
                code: 'BAD_USER_INPUT',
                invalidArgs: args.name,
              },
            }
          )
        }
      }

      authorExist.born = args.born
      const authors = authorExist

      try {
        await authors.save()
      } catch (error) {
        throw new GraphQLError('Saving author failed', {
          extensions: {
            code: 'BAD_USER_INPUT',
            invalidArgs: args.name,
            error,
          },
        })
      }
      return authors
    },

    //  create user and login

    createUser: async (root, args) => {
      if (!args.username || !args.favouriteGenre) {
        throw new GraphQLError(
          'invalid username or favourite genre should be entered.',
          {
            extensions: {
              code: 'BAD_USER_INPUT',
              invalidArgs: args.title,
            },
          }
        )
      }

      // check user exist

      const userFound = await User.findOne({ username: args.username })

      if (userFound) {
        throw new GraphQLError(
          'This user  already exist make sure title is unique',
          {
            extensions: {
              code: 'BAD_USER_INPUT',
              invalidArgs: args.author,
            },
          }
        )
      }

      const user = new User({ ...args })

      return user.save().catch((error) => {
        throw new GraphQLError('Creating the user failed', {
          extensions: {
            code: 'BAD_USER_INPUT',
            invalidArgs: args.name,
            error,
          },
        })
      })
    },
    login: async (root, args) => {
      const user = await User.findOne({ username: args.username })

      if (!user || args.password !== 'secret') {
        throw new GraphQLError('wrong credentials', {
          extensions: { code: 'BAD_USER_INPUT' },
        })
      }

      const userr = await User.findOne({ username: args.username })

      const userForToken = {
        username: userr.username,
        id: user._id,
      }

      return { value: jwt.sign(userForToken, process.env.JWT_SECRET) }
    },
  },
  // subsciption
  Subscription: {
    bookAdded: {
      subscribe: () => pubsub.asyncIterator('BOOK_ADDED'),
    },
  },
}

module.exports = resolvers
