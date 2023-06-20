<h1 align="center"> $\textcolor{orange}{Book List\ Project\ Frontend\ GraphQL\ Mongo DB }$
</h1>

# $\color{cyan}{Part8c}$

<details>

<summary>

### $\color{cyan}{Start Server :}$

</summary>

```
node Exercise8.16.js or index.js
```

Apollo server runs in development mode `http://localhost:4000`

This takes us to `Apollo Studio Explorer`

</details>
<details>

<summary>

### $\color{cyan}{Dependecies}$

 </summary>

Frontend communication between React app and GraphQL .

```
npm install @apollo/client graphql
```

Others

```
npm install react-redux
```

```
npm install @reduxjs/toolkit
```

```
npm install react-router-dom
```

```
npm i --save react-select
```

```
npm install styled-components
```

```
npm install graphql-ws
```

</details>

<details>
<summary>

### $\color{cyan}{Exercises}$

 </summary>

`8.8:` Authors view

- Implement view of to show details of all authors.

`8.9:` Books view

- Implement a Books view to show on a page all other details of all books except their genres.

- Used redux-Toolkit to implement notification message to display the success of a book added and error message.

`8.10:` Adding a book

- Implement a possibility to add new books.

  ![Screenshot 2023-06-20 at 10 29 03 am](https://github.com/Amutha37/GraphQLPart8/assets/67087939/806d9d00-a1db-4229-a98d-787be760f4bf)

- Authors and Books views are kept up to date after a new book is added.

![Screenshot 2023-06-20 at 10 30 37 am](https://github.com/Amutha37/GraphQLPart8/assets/67087939/7b18e8c4-99f3-47c3-bc70-4a2c269e5048)

`8.11:` Editing author's birth year

- Implement a possibility to change and set authors birth year.

- Form for changing of the year is on the same page as all authors list table.

- Changes and instantly updated on authors list for view.

`8.12:` Changing birth year

- Birth year can be changed only for existing authors using drop-down selectio box.

![Screenshot 2023-06-19 at 2 34 39 pm](https://github.com/Amutha37/GraphQLPart8/assets/67087939/546419fd-748b-4035-966d-9e09929de11e)

\*\* Continue of fronend after implementing database for backend

`8.17` Listing books

- Make the fronend now to work on listing books

`8.18` Log in

- Implement adding new books and changing the birth year of an author as they requires a user to be logged in.

- User interface can be implemented for selection or navigating between selection.

`8.19` Books by genre, part 1

- Implement filtering of the book by genre selection.

![BookListbygenre selection](https://github.com/Amutha37/GraphQLPart8/assets/67087939/550203be-5e82-4edf-8878-0585d6f2e1d8)

`8.20` Books by genre, part 2

- Implement a view which shows all the books based on the logged-in user's favourite genre.

![Screenshot 2023-06-19 at 2 30 44 pm](https://github.com/Amutha37/GraphQLPart8/assets/67087939/ba80f17a-0987-4743-bec9-1e0adc97a2ce)

`8.25:` Subscriptions - client, part 2
Keep the application's book view updated when the server notifies about new books (you can ignore the author view!). You can test your implementation by opening the app in two browser tabs and adding a new book in one tab. Adding the new book should update the view in both tabs.

`8.26:` n+1
Solve the n+1 problem of the following query using any method you like.

</details>

<details>
<summary>

### $\color{cyan}{Recommeded Readings}$

 </summary>
https://www.smashingmagazine.com/2021/11/graphql-frontend-react-apollo/

</details>
