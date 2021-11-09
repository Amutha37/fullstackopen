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

> `npm test`

4.4: helper functions and unit tests, step2

*Define a new totalLikes function that receives a list of blog posts as a parameter. The function returns the total sum of likes in all of the blog posts. Group the test report so we can see each test is grouped with description titles. This can be achieved using ‘describe block function’ .


![Screen Shot 2021-11-09 at 11 33 34 am](https://user-images.githubusercontent.com/67087939/140840055-0c68b04c-13f0-4934-b483-84a533130c42.png)
>>>>>>> c146fa40f877f31304762e4c3da8f6a15eaf5385

![Screen Shot 2021-11-09 at 11 33 34 am](https://user-images.githubusercontent.com/67087939/140840055-0c68b04c-13f0-4934-b483-84a533130c42.png)
