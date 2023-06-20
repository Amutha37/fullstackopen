<h1 align="center"> $\textcolor{orange}{Book List\ Project\ Backend\ GraphQL Mongo DB }$
</h1>

# $\color{cyan}{Part8a - Part8c}$

<details>
<summary>

### $\color{cyan}{Dependecies}$

 </summary>

```
npm install @apollo/server graphql
```

```
npm install mongoose
```

```
npm install mongoose-unique-validator
```

```
npm install mongoose dotenv
```

```
npm install jsonwebtoken
```

### For using subscriber option

```
npm install express cors
```

\*\*\* First, we have to install two packages for adding subscriptions to GraphQL and a Node.js WebSocket library:

```
npm install graphql-ws ws @graphql-tools/schema
```

### With subscriptions, the communication happens using the publish-subscribe principle utilizing the object PubSub.

```
npm install graphql-subscriptions
```

start server :

```
node Exercise(8.X).js
```

Apollo server runs in development mode `http://localhost:4000`

This takes us to `Apollo Studio Explorer`

</details>

<details>
<summary>

### $\color{cyan}{Exercises}$

 </summary>

`8.1:` The number of books and authors

- Implement queries bookCount and authorCount which return the number of books and the number of authors.

`8.2:` All books

- Implement query allBooks, which returns the details of all books.

`8.3:` All authors

- Implement query allAuthors, which returns the details of all authors. The response should include a field bookCount containing the number of books the author has written.

`8.4:` Books of an author

- Modify the allBooks query so that a user can give an optional parameter author. The response should include only books written by that author.

`8.5:` Books by genre

- Modify the allBooks query so that a user can give an optional parameter genre or genre and author.

Added only author as an option which will work similar to Exercise8.4

i) genre
ii) autor
iii) author and genre

`8.6:` Adding a book

- Implement mutation `addBook` to add new book.

* The mutation works even if the author is not already saved to the server or author data list.

- If the author is not yet saved to the server, a new author is added to the system. Born year will be null for now.

`8.7:` Updating the birth year of an author

- Implement mutation `editAuthor`, which will be used for changing the birth year or `born:` of the author.

- If the author is not in the system, `null` is returned:

</details>

# MongoDB database

<details>
<summary>

### $\color{cyan}{Exercises 8.13 - 8.16}$

 </summary>

`8.13:` Database, part 1

- Library application so that it saves the data to a database

`8.14:` Database, part 2

- Complete the program so that all queries (to get allBooks working with the parameter author and bookCount field of an author object is not required) and mutations work.

`8.15:` Database, part 3

- Database validation errors (e.g. book title or author name being too short) are handled sensibly. Use `GraphQLError` with a suitable error message to be thrown.

* Added validation for published year and year born.

`8.16:` user and logging in
Add user management to your application. Expand the schema like so:

`8.23:` Subscriptions - server
Do a backend implementation for subscription bookAdded, which returns the details of all new books to its subscribers.

`8.24:` Subscriptions - client, part 1
Start using subscriptions in the client, and subscribe to bookAdded. When new books are added, notify the user. Any method works. For example, you can use the window.alert function.

</details>
