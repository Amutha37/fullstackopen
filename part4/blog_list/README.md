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

> `npm install express`

> `npm install cors`

> `npm install mongoose`

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

4.2.  Step 2  
Refactor the application into separate modules to adhere to Node.js best practices.

Create separate modules for configuration  config.js 
Test the app.

Create separate modules for message handler logger.js and middleware.js .
Test the app.

Create separate modules for the event handler router.  This will be in the folder name ‘controller’.
Now the ‘ index .js ‘ file will not import the app.js the actual application file. Index.js file will be used for creating the server. 
The app.js file will be the main app that starts the application. 
Test the app.


*Install Lint tools to perform static analysis of source code.

> `npm install eslint --save-dev`

Initialize a default ESlint configuration with the command:
> `node_modules/.bin/eslint --init`

Testing Node applications

Jest is a natural choice for this course, as it works well for testing backends, and it shines when it comes to testing React applications.

** Since tests are only executed during the development of our application, we will install jest as a development dependency with the command:

Exercise 4.3. - 4.7.


> `npm install --save-dev jest`

Edit npm script test in package.json to execute tests with Jest and to report about the test execution with the verbose style:
![Screen Shot 2021-11-09 at 10 39 37 am](https://user-images.githubusercontent.com/67087939/140835437-ff82602f-e091-4071-8dd6-44a3006ba7e9.png)

Edit ‘.eslintrc.js’ to get rid of the complaints by adding "jest": true to the env property in the .eslintrc.js file.
![Screen Shot 2021-11-09 at 10 40 11 am](https://user-images.githubusercontent.com/67087939/140835482-f33ea774-eee9-4ecc-9cb6-dcc08863ffc0.png)

Create a file called ‘utils/list_helper.js’  and define a dummy function that returns the value 1.

Create a test file under the test directory to run the dummy function.


