<h1 align="center"> $\textcolor{orange}{React\ Query\ }$
</h1>

## $\color{cyan}{Part6d}$

### Getting Started with React Query

- Take this project as your starting point. `https://github.com/fullstack-hy2020/query-anecdotes`

```
npm install
```

```
npm install axios
```

- The project has a ready-installed `JSON Server`, the operation of which has been slightly modified. Start the server with :

```
npm run server
```

- The exercises are done in branches.

<details>
<summary>
$\color{cyan}{Part6d}$

</summary>

```
npm install react-query
```

- Modify `index.js` to pass the library functions to the entire application

- Getting data from the backend
  In this exercise we will use `json-server`.

- Create dummy data in `db.json` placed in the 'root' of the project.
- Install json-server for the project ...

```
npm install json-server --save-dev
```

- Add scripts line in `package.json`

```
"server": "json-server -p3001 --watch db.

```

- Launch json-server

```
 npm run server
```

    'preview `http://localhost:3001/notes`

</details>

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.20}$

 </summary>

- Implement fetching all anecdotes from the server using React Query.

- Implement displaying error message when server is has problem.

</details>

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.21}$

 </summary>

- Implement adding of new anecdotes to server using React Query.

</details>

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.22}$

 </summary>

- Implement voting for anecdotes to server using React Query. Should render the increse votes.

</details>
<<<<<<< HEAD

<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.24}$

 </summary>

- Implement error handling for the insertion including failed POST request for adding least 5 characters long.
=======
<details>
<summary>
 $\color{lightgreen}{Exercise\ 6.23}$

 </summary>

- Implement the application's notification state management using the useReducer hook and context.

- The notification is displayed for five seconds.
>>>>>>> Exercise6.23

</details>

![Screenshot 2023-03-07 at 8 28 55 am](https://user-images.githubusercontent.com/67087939/223235582-79f9167b-dc70-479e-a6bf-aadac3a9ca9f.png)


