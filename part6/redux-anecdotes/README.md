<h1 align="center"> $\textcolor{orange}{REDUX\ }$
</h1>

## $\color{cyan}{Part6}$

### Getting Started with Redux

- Exercise 6.3 - 6.8 `anecdotes` exercise from part 1 to handle the state management with Redux.

- The exercises are done in branches.

## `Part6-a`

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.3}$

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

## `Part6-b`

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
