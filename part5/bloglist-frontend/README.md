<h1 align="center"> $\colorbox(green}{{color{white}{PART\ 5\ Bloglist-frontend}}}$
</h1>
<p align="center">
### 5.1 Bloglist-frontend Step 1

Implementing user and password functionallity. Token return with successfull login.

</p>
## Dependencies used in this project
<details>
<summary> Dependencies </summary>
- npm install axios

</details>
> `npm run build`
### 5.3

Make the login 'permanent' by using local storage and implement a way to log out.

### 5.3

Implement a form to allow user to add new favourite blog list. Save the blog list to backend MongoDb

### 5.4.

Implement notification message of the successful and unsuccessfull of the operation on the top.

### 5.5

Add create blog button and it only displayed when appropriate button selected.

### 5.6

Separate the new blog form into its own component and move all the states that belong the component .

### 5.7 View blog detail using button control

### 5.8 Add Likes button to rate the blog likebility.

### 5.9 Sort the listing of blogs by decending order of likes.

### 5.10 Add button to delete a blog.

### 5..11 Define PropTypes

- Implement `buttonLabel` required to prevent no lable text.

- The expected and required props of a component can be defined with the prop-types package.

> `npm install prop-types`

('import PropTypes from 'prop-types'

`LoginForm.propTypes = {
handleSubmit: PropTypes.func.isRequired,
handleUsernameChange: PropTypes.func.isRequired,
handlePasswordChange: PropTypes.func.isRequired,
username: PropTypes.string.isRequired,
password: PropTypes.string.isRequired
}`

)

(import PropTypes from 'prop-types'

`Togglable.propTypes = {
buttonLabel: PropTypes.string.isRequired
}`)

<details>
### 5.12 ESlint
<summary>
NB: `do not run the eslint --init command. It will install the latest version of ESlint that is not compatible with the configuration file created by create-react-app!`

Next, we will start testing the frontend and in order to avoid undesired and irrelevant linter errors we will install the eslint-plugin-jest package:

</summary>
> `npm install --save-dev eslint-plugin-jest`
> insert `Togglable.displayName = 'Togglable'` in toggle bar component for `useRef` not recognised.

</details>

# Testing React app

## Unit test

### Getting Started

<details>
<summary> First, install react-testing-library </summary>

```
npm install --save-dev @testing-library/react @testing-library/jest-dom
# or
yarn  --save-dev @testing-library/react @testing-library/jest-dom
```

</details>

<details>
<summary> Test run after each unit test editing . </summary>

Next, if you want to run tests "normally", you can do so with the command:

```
CI=true npm test

```

For Windows (PowerShell) users

```
env:CI=$true; npm test

```

</details>

### Test coverage

- To find out the coverage run with the command :

```
 CI=true npm test -- --coverage
```

##

### 5.13 Testing Blog post component

 <details>
 <summary>
Step 1
</summary>
Test blog renders title and author by default.
Use CSS-class where it needed.
</details>

##

### 5.14 More information dislayed on a button "more" clicking.

- Instaling library for button handler

<details>
<summary>
Install `user-event` that makes simulating user input.
</summary>

`npm install --save-dev @testing-library/user-event`

</details>

 <details>
<summary>
Correcting a mismatch (written on 28.1.2022) between the version of a dependency jest-watch-typeahead that create-react-app and user-event are using. The problem is fixed by installing a specific version:
</summary>

`npm install -D --exact jest-watch-typeahead@0.6.5 `

</details>

<details>

 <summary>
Step 2
</summary>
Test blog renders title and author by default.
Use CSS-class where it needed.
</details>

##

### 5.15 Likes button is event handler is received when clicked twice

<details>
 <summary>
Step 3
</summary>
Make sure button is cliked twice and the event handler receive the props twice.
</details>

##

### 5.16 Test the creation of new blog form.

<details>
 <summary>
Step 4
</summary>
The test should check, that the form calls the event handler and received the right props.
 - Unit test result
 
 
 ###
 ![unitTestResult](https://user-images.githubusercontent.com/67087939/207742517-d2680625-e8c8-4376-9d89-c061edcb3899.png)
 
</details>

## $\textcolor{orange}{End\ to\ end\ INTERGRATION\ testing\ -\ Blog\ List}$


### Getting Started with Cypress

"E2E library Cypress has become popular within the last year. Cypress is exceptionally easy to use, and when compared to Selenium, for example, it requires a lot less hassle and headache. Its operating principle is radically different than most E2E testing libraries, because Cypress tests are run completely within the browser. Other libraries run the tests in a Node-process, which is connected to the browser through an API."

<details>
<summary>
Install `cypress` to the frontend </summary>

```
npm install --save-dev cypress
```

and by adding an npm-script :

```
  "cypress:open": "cypress open"
```

</details>

 <details>
 <summary>
Step 1 Exercise 5.17
</summary>

Test the application display the login by default.

###

![Screen Shot 2023-01-25 at 3 28 53 pm](https://user-images.githubusercontent.com/67087939/214481742-f22f933a-73b8-4c1c-a6ec-9ee324bc44e7.png)

</details>

 <details>
 <summary>
Step 2 Exercise 5.18
</summary>

Test both successful and unsuccessful login attempts.

###

![succedandfailwithcredentials](https://user-images.githubusercontent.com/67087939/214494411-dcb63dfb-3f32-4efe-a2e9-d872478ac6a1.png)

</details>
 <details>
 <summary>
Step 3 Exercise 5.19
</summary>

Verifies a logged in user can create a new blog successfully.

###

![CanCreateNewBlog](https://user-images.githubusercontent.com/67087939/215013856-13175df6-dc83-4851-8a2e-e6a8cc265626.png)

</details>
<!-- 4 step -->

<details>
 <summary>
Step 4 Exercise 5.20
</summary>

Confirm test users can add likes to a blog.

###

![CanAddLikesToBlogs](https://user-images.githubusercontent.com/67087939/215013209-19f823eb-cccf-49b4-a7a0-6bda3032f437.png)

</details>

<!-- 5 step -->

<details>
 <summary>
Step 5 Exercise 5.21
</summary>

Logged in user can delete their own blog list.

###

![UsercanDelBlog](https://user-images.githubusercontent.com/67087939/215013617-1bbc4f65-1db5-4ed9-91ba-93c8655fc085.png)

</details>

<!-- 6 step -->

<details>
 <summary>
Step 6 Exercise 5.22
</summary>

Test blogs are listed by number of most likes.

###

![BlogsOrderedBaseOnMostLikes](https://user-images.githubusercontent.com/67087939/215013319-3d77f46a-1d51-4e14-a141-8dc07d48daef.png)

</details>

<details>
 <summary>
  Command line testing
</summary>
 
```
npm run test:e2e
```


![debuggingTest](https://user-images.githubusercontent.com/67087939/215616948-da7e35c9-b00b-43e8-8655-00fcd329e8df.png)
![debugSummary](https://user-images.githubusercontent.com/67087939/215617140-1bc94853-2b8f-43c3-98a7-fe4fd727ad4e.png)


</details>
