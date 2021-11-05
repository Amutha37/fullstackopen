Part 4 Blog List

Exercises 4.1.-4.2.

- Let's imagine a situation, where you receive an email that contains the following application body:

![Screen Shot 2021-11-04 at 3 34 28 pm](https://user-images.githubusercontent.com/67087939/140258794-625cde71-c9cd-4ade-9cab-bff1ed940d35.png)

- Turn the application into a functioning npm project.

  4.1. Step 1 Initial setup

> `npm init`
> Create index.js
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
