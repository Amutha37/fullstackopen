GraphQL Part8b

<details>
<summary>

Start Server :

<details>

```
node Exercise(8.7).js
```

Apollo server runs in development mode `http://localhost:4000`

This takes us to `Apollo Studio Explorer`

<summary>

### $\color{cyan}{Dependecies}$

 </summary>

Frontend communication between React app and GraphQL .

```
npm install @apollo/client graphql
```

Others

```
npm install react-router-dom
```

```
npm install styled-components
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

- Authors and Books views are kept up to date after a new book is added.

`8.11:` Editing author's birth year

- Implement a possibility to change and set authors birth year.

- Form for changing of the year is on the same page as all authors list table.

- Changes and instantly updated on authors list for view.

- 8.12: Birst year can be changed only for existing authors using drop-down selectio box.

</details>
