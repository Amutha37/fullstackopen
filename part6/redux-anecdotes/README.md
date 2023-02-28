<h1 align="center"> $\textcolor{orange}{REDUX\ }$
</h1>

## $\color{cyan}{Part6}$

### Getting Started with Redux

- $\color{lightgreen}{Exercise\ 6.3\ -\ 6.8}$ uses `anecdotes` base project from part 1 to handle the state management with Redux.

- The work of each exercise done in branches.

### `Part6-a`

### Flux-architecture and Redux

- Flux-achirecture used my Facebook for the same purpose as Redux state management. We will use Redux library.

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.3 }$

 </summary>

Implement fuctionality for the number of votes to be stored to a Redux store.

</details>

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.4}$

 </summary>

Implement fuctionality for adding new anecdotes to be stored to a Redux store.

- You can keep the form uncontrolled like we did earlier

</details>

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.5}$

 </summary>

List of anecdotes are ordered by the number of votes.

</details>

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.6}$

 </summary>

Separate the creation of action-objects to action creator-functions and place them in the src/reducers/anecdoteReducer.js file

</details>

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.7}$

 </summary>

Separate the creation of new anecdote logic to its own component called
`AnecdoteForm.js`

</details>

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.8}$

 </summary>

Move rendering of the anecdote list and logic and voting count logic to one component.Component called
`AnecdoteList.js`

</details>

### `Part6-b`

### Many Reducers

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.9}$

 </summary>

Implementing filtering of the acnecdotes list.

Create Filter component and `combineReducer function`.

</details>

## <h3 > $\textcolor{orange}{Redux\ Toolkit\ }$

</h3>

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.10}$

 </summary>
$\color{lightblue}{Step\ 8}$

Implementing `Redux Toolkit` to run the project.

```
npm install @reduxjs/toolkit
```

- Separate the creation of the store in `store.js` instead of inside `index.js` . Use Redux Toolkit's `configureStore` function for store creation.

- With Redux Toolkit,create reducer and related action creators using the `createSlice` function.

- Change filter reducer and action creators(filterReducer.js) to use the Redux Toolkit's createSlice function.

</details>

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.11}$

 </summary>
   $\color{lightblue}{Step\ 9}$

- Create the store using Redux Toolkit's `configureStore` function

- With Redux Toolkit,create reducer and related action creators using the `createSlice function`.

- Change filter reducer and action creators(anecdoteReduce.js) to use the Redux Toolkit's createSlice function.

</details>

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.12 - 13}$

 </summary>
   $\color{lightblue}{Step\ 10\ -\ 11}$

- Render notification message stored in the Redux store.

- Create separate reducer for the notification using `createSlice` and include it in `configureStore` for store creation.

- Set timeout for the notification message.

</details>

### `Part6-c`

### Communicating with server

<details>
<summary>
$\color{lightgreen}{Exercise\ 6.14}$

 </summary>

$\color{lightblue}{Step\ 1}$

- Getting data from the backend
  In this exercise we will use `json-server`.

1. Create dummy data in `db.json` placed in the 'root' of the project.
2. Install json-server for the project ...

```
npm install json-server --save-dev
```

3.  Add scripts line in `package.json`

```
"server": "json-server -p3001 --watch db.

```

4.  Launch json-server

```
npm run server
```

- preview

`http://localhost:3001/anecdotes`

$\color{lightyellow}{Fetching\ data\ from\ the\ backend}$

Use a fetch method to get the data using `axios` in `services/anecdotes.js` .

```
npm install axios
```

\*\* We did not use `await` where it only works inside `async` functions.For the simple nature of this operation we'll abtain from using `async`.

</details>

<details>
<summary>
$\color{lightgreen}{Exercise\ 6.15}$

 </summary>

$\color{lightblue}{Step\ 2}$

5. Change the creation of new anecdotes to be stored in backend(db.json).

</details>

## <h3 > $\textcolor{orange}{Redux\ Thunk\ }$

</h3>

<details>
<summary>
$\color{lightgreen}{Exercise\ 6.16}$

 </summary>

$\color{lightblue}{Step\ 3}$

- Modify the initialization of the Redux store to happen using asynchronous action creators, which are made possible by the Redux Thunk library.

</details>

<details>
<summary>
$\color{lightgreen}{Exercise\ 6.17}$

 </summary>

$\color{lightblue}{Step\ 4}$

- Modify the creation of a new anecdote to happen using asynchronous action creators, made possible by the Redux Thunk library.

</details>
<details>
<summary>
$\color{lightgreen}{Exercise\ 6.18}$

 </summary>

$\color{lightblue}{Step\ 5}$

- Modify the udate of votes to backend using the Redux Thunk library method.

</details>
<details>
<summary>
$\color{lightgreen}{Exercise\ 6.19}$

 </summary>

$\color{lightblue}{Step\ 6}$

- Modify the notification for handling of 2 actions message and setTimeOut.

</details>
