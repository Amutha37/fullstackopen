<h1 align="center"> PART 5 Bloglist-frontend
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

LoginForm.propTypes = {
handleSubmit: PropTypes.func.isRequired,
handleUsernameChange: PropTypes.func.isRequired,
handlePasswordChange: PropTypes.func.isRequired,
username: PropTypes.string.isRequired,
password: PropTypes.string.isRequired
})

(import PropTypes from 'prop-types'

Togglable.propTypes = {
buttonLabel: PropTypes.string.isRequired
})

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
 
 ### 5.13 Testing Blog post component

Test blog renders the blog's title and author.
Use CSS-class where it needed.
