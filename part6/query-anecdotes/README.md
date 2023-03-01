<h1 align="center"> $\textcolor{orange}{React\ Query\ }$
</h1>

## $\color{cyan}{Part6d}$

### Getting Started with React Query

-   Take this project as your starting point. `https://github.com/fullstack-hy2020/query-anecdotes`

```
npm install
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

- Implement retrieving anecdotes from the server using React Query.

</details>