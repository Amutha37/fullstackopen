Part 4 Blog List

Exercises 4.1.-4.2.

- Let's imagine a situation, where you receive an email that contains the following application body:

![Screen Shot 2021-11-04 at 3 34 28 pm](https://user-images.githubusercontent.com/67087939/140258794-625cde71-c9cd-4ade-9cab-bff1ed940d35.png)

- Turn the application into a functioning npm project.

  4.1. Step 1 Initial setup

> `npm init`
> touch index.js
> (Write a simple code that create-server and print a message on the browser.
> Edit script in package.json.

"start": "node index.js",

Test run the app

> `node index.js`

Let’s install nodemon and configure the package.json script file to execute the app with nodemon.

> `npm install --save-dev nodemon`

Edit script in package.json

“dev” : “nodemon index.js”

Start server with : -

> `npm run dev`

We can now work on the given app. Copy the code into index.js.

In order for the the given application to work as a functioning npm project, we have to install all the npm package dependency libraries.

`npm install express`

> `npm install cors`

> `npm install mongoose`

> `npm i mongoose-unique-validator@2.0.1`
> Mongoose 2.0.1 workd for cross id recording of 2 document database.

Use Postman or VS Code REST client to test operation.

If you are using VS Code REST install the extension, create file `.rest` use the operation to test.

POST http://localhost:3003/api/blogs
content-type: application/json

{
"title": "Neil Patel/blog",
"author": "Neil Patel",
"url": "https://neilpatel.com/blog/",
"likes": 4
}

This should create a database in mongoDB, we should able to print it out the local server `http://localhost:3003/api/blogs`

Exercises 4.3. - 4.7.

> `npm install --save-dev jest`

Edit npm script test in package.json to execute tests with Jest and to report about the test execution with the verbose style:
![Screen Shot 2021-11-09 at 10 39 37 am](https://user-images.githubusercontent.com/67087939/140835437-ff82602f-e091-4071-8dd6-44a3006ba7e9.png)

Edit ‘.eslintrc.js’ to get rid of the complaints by adding "jest": true to the env property in the .eslintrc.js file.
![Screen Shot 2021-11-09 at 10 53 07 am](https://user-images.githubusercontent.com/67087939/140836602-32f51aef-a6c3-4927-808c-6c8767cd24ce.png)

Create a file called ‘utils/list_helper.js’ and define a dummy function that returns the value 1.

Create a test file under the test directory to run the dummy function.

> `npm test`

![Screen Shot 2021-11-09 at 10 59 04 am](https://user-images.githubusercontent.com/67087939/140837082-a5694845-a3cc-4dfc-819f-56dc72baf25b.png)

4.4: helper functions and unit tests, step2

\*Define a new totalLikes function that receives a list of blog posts as a parameter. The function returns the total sum of likes in all of the blog posts. Group the test report so we can see each test is grouped with description titles. This can be achieved using ‘describe block function’ .

![Screen Shot 2021-11-09 at 11 33 34 am](https://user-images.githubusercontent.com/67087939/140840055-0c68b04c-13f0-4934-b483-84a533130c42.png)

- Another way of running a single test (or describe block name) is to specify the name of the test to be run with the -t flag:

> `npm test -- -t 'when list has only one blog, equals the likes of that'`

- This will allow the user to only choose specific test file and not all the test file existing in the project folder.

  4.5 - 4.7 Exercise

- This part of test will be focussing on printing the outcome for test function : -

* Use lodash to test this part of task

1. Define a new function ` favoriteBlog` to print the favourite blog by returning the blogs and author with the most likes.

### 4.6 - 4.7 Helper function and unit test

> `npm i --save lodash`

2. Define a new function `mostBlogs` to print the author with most blogs and the total number of the blogs.
3. Define a new function `mostLikes` to print the the author with largest amount of likes. The return print value that contains the total number of likes that the author has received.

# Exercises 4.8 - 4.12 This section of the test we will be testing directly with mongoDB.

STEPS

1. Define the exercution mode of the application with NODE_ENV environment variable. This is to ensure we able to run the application in development and testing mode.

Edit Script file to use the node convention.

1.1. In order for this to work on `Windows` install `cross-env`

> `npm install --save-dev cross-env`

Edit script file to achieve cross-platfrom compatibility by using the cross-env library.

2. Modify .env file to configure the application to execute test using separate database. We will achive our test database using `Mongo in-memory or Docker container.

3. Make changes in `config.js` file. Use ternary operator to define the application mode of database URL.

### 4.8 Blog list test, step 1

1.  Install supertest package as a developent dependency.

> `npm install --save-dev supertest`

- Supertest imports the Express application from the app.js module and wraps it with supertest function into a so-called superagent object which is then assign to the api variable and we can you it to make HTTP request for this test.

2. Create test file `test/blog_api.test.js` to print the blog list total.

2.1 Wrap the import module in supertest method as a parameter.

2.2. Test the content type for `application\/jason/` .

### To run individual test file : -

run test file :

> `npm test -- test/blog_api.test.js`

3. Create `test_helper.js` to create initial data.

4. Initialize the database in `blog_api.test.js` before every test with the `beforeEach` function offered by `Jest`.

- Use `asyn...await ` to achieve this process and `for...of` to complete the promise all return in specific order.

5. Write test for blog list application returns the correct amount of blogs posts in the JSON format.

6. Edit logger.js to from executing console message when on test environment.

### 4.9 Verify existence of id property

### Testing using specific test name or describe block name

- test name

  > `npm test -- -t "If likes propery is missing set default the vote to be 0"`

- test describtion
  > `npm test -- -t 'Likes property missing from request'`

### 4.10 Add new blog

4.1 Verify it correctly saved.
4.2 Refactor the operatioin to use async/await instead of promises.

- Install > `npm install express-async-errors`

Import the library in `app.js`

`require('express-async-errors')`

1. The 'magic' of the library allows us to eliminate the try-catch blocks completely.
2. The library handles everything under the hood.

4.3 If an exception(error) occurs in a async route, the execution is automatically passed to the error handling middleware.

- Run the test again if the supertest and cros.env is missing error is and issue reinstall again.

### 4.11 Blog test for missing likes property.

.Likes is missing assign to 0.

### 4.12 Blog test for invalid data

.Respond to the requet with status code 400 Bad Request when data is invalid.

### 4.13 Implement functionality for deleteing a single post blog.

. Use async/await to define this fuction.
.Write a test to test this function.

### 3.14 Update like for the post.

. Update the likes of any post.
. Write a test for this functionality.

A more sophisticated way is to use the dotenv library. You can install the library with the command:

> `npm install dotenv`

\*\* The .env file should be gitignored right away, since we do not want to publish any confidential information publicly online!

The environment variables defined in the .env file can be taken into use with the expression require('dotenv').config() and you can reference them in your code just like you would reference normal environment variables, with the familiar process.env.MONGODB_URI syntax.

It's important that dotenv gets imported before the note model is imported. This ensures that the environment variables from the .env file are available globally before the code from the other modules is imported.

# User administration database and token-base authentication

In this part we will implement user admin data-base which will record username,name and password. This will be store in document database MongoDB.

We will use npm package library :

1. `npm uninstall bcrypt` function for hash password

2. `npm install jsonwebtoken` to generate JSON web tokens.

### 4.15 Bloglist step 3

Create a new users using HTTP POST request to address api/users. Field username,password and name. Iinstall password libray `bcrypt`.

> `npm install bcrypt`

\*\*\* NB Some Windows users have had problems with bcrypt. If you run into problems, remove the library with command `npm uninstall bcrypt` and install `bcryptjs` instead.

List all the new user.
`/api/users`

### 4.16 Bloglist step 4

Add validation for user length and unique username.
Use suitable status code and error message for invalid data entry.

### 4.17 Bloglist step 5

Record the creator(from the user database) of the blog in each blogs.

List the all blogs with the creator in display.

### 4.18 Bloglist Step 6

## Implement token-based authentication using :

> `npm instal jsonwebtoken`

Create code for the function in `controllers/login.js`.

The process for the new note is : -

1. Create user `controllers/users.js`
2. Create token `controllers/login.js` using the user and password.
3. Create new note with token from step 2. 'controllers/notes.js` using token and bearer scheme

- Bearer scheme is necessary for server to offer multiple ways to authenticate. Attach credentials ..

# The token can be faulty (like in our example), falsified, or expired. Let's extend our errorHandler middleware to take into account the different decoding errors. Using middleware to handle decoding errors.

(error.name === 'JsonWebTokenError') {
return response.status(401).json({
error: 'invalid token',
})
}

If the application has multiple interfaces requiring identification, JWT's(jswebtoken) validation should be separated into its own middleware. Some existing library like express-jwt could also be used.

Problems of Token-based authentication

- Downside of token is it has blind trust to the token holder. It allow a user who access has been denied to still use the token. For this reason we can limit the validity period of the token.

- const token = jwt.sign(userForToken, process.env.SECRET, {
  expiresIn: 30 \* 30,
  })`

The client has to get new token once the token expire. We use middleware to handle the expired token error.

Option two is to create a server side session. Saving the token infor in backend datebase and check for API request for access right.

The downside for server side session is it increase the complexity and performance since the token validity needs to be checked for each API request from database which considered slower compare to checking validity from token itself.

### 4.19 Bloglist Step 7

Use the user and password identified by the token as the creator of the blog.

### 4.20 Bloglist Step 8

Refactor token generator to a middleware. Registering the middleware in the app.js file.

`app.use(middleware.tokenExtractor)`

### 4.21 Bloglist Step 9

Delete a blog only by the user with the requested token.

`const blog = await Blog.findById(...)`

Object.id must be string

`if ( blog.user.toString() === userid.toString() ) `

### 4.22 Bloglist Step 10

Use one middleware to extract user token and sets it to the request object.

Register the middleware in app.js

`app.use(middleware.userExtractor)`

On REST API

` const user = request.user`

# 4.23 Bloglist Step 11

Test result of user and token authentication.

![user_api test](https://user-images.githubusercontent.com/67087939/150930944-b6572cf1-19e2-42a2-a435-d56d82770f79.png)

Test result of blog_api.test after implementation of user and token.

![blog_api test](https://user-images.githubusercontent.com/67087939/150930919-9ba6227a-331a-4757-8d4f-a867992f923e.png)

### Deployment auto set in package.json

<Details>
Auto build and deloy code for `package.json`
<Summary>
Scrit for deployment

- `"build:ui": "rm -rf build && cd ../bloglist-frontend/ && npm run build && cp -r build ../blog_list",`
- `"deploy": "git push heroku main",`
- `"deploy:full": "npm run",`
- `build:ui && git add . && git commit -m uibuild && git push && npm run deploy",`
- `"logs:prod": "heroku logs --tail"`

</Summary>
</Details>
