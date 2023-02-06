<h1 align="center"> $\textcolor{orange}{REDUX\ }$
</h1>

## $\color{cyan}{Part6}$

### Getting Started with Redux

Exercise 6.1 - 6.2 uses `unicafe` exercise from part 1 to handle the state management with Redux.

<details>
<summary>
 $\color{lightgreen}{Exercise 6.1 - Exercise 6.2}$

 </summary>

Step 1
Using base project :

```
"git clone https://github.com/fullstack-hy2020/unicafe-redux.git"
```

next

`cd unicafe-redux `
// go to the directory of cloned repository and remove the git configuration

```
rm -rf .git
```

```

npm install
```

```
npm start
```

<details>
 <summary>
Step 1
</summary>
Testing the Reduce method.
Install deep-freeze to ensure reducer has been correctly define as an immutable function.

```
npm install --save-dev deep-freeze
```

### To run individual test file : -

```
run test file :
```

```
npm test -- reducer/counterReducer.test.js
```

### run specific test name or describe block name

- test name

```
npm test -- -t  "should return a proper initial state when called with undefined state"
```

- test describtion

```
  npm test -- -t 'unicafe reducer'
```

<details>
 <summary>
$\color{red}{ERROR}$
</summary>
 Test may fail with a message, install jest-watch-typeahead.
At the moment of writing (28.1.2022) there is a mismatch between the version of a dependency jest-watch-typeahead that create-react-app and user-event are using. The problem is fixed by installing a specific version:

`npm install -D --exact jest-watch-typeahead@0.6.5`

</details>

Test result 

![unicafe-reduxtest](https://user-images.githubusercontent.com/67087939/216877500-a5aed3b6-f618-4573-bfe3-e9515a789347.png)

</details>
