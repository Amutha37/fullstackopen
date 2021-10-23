## Exercises 2.6.-2.10. phonebook

1. Create a phonebook adding names to the phonebook.
2. Prevent user from adding same names. (add alert command when same name input occur)
3. Add phone number to the phone book.
4. Implement search field.
5. Refactor code and place components in a separate component folder.

![Screen Shot 2021-07-08 at 2 08 20 pm](https://user-images.githubusercontent.com/67087939/124860939-f7a99600-dff5-11eb-980e-50c2054a09a1.png)

## Exercises 2.11

1. Storing initial state data in db.json in the root of the project. (start json server on different port to port 3000 which is reserved for npm start)

## Exercise 2.15 - 2.18 phonebook

1. Change the way data is being fetch using axios and react hook 'useEffect'.

2. Save the numbers to backend server.
3. Handle the communication with backend into its own module.
4. Make delete possible for each contact person. Display confirmation message using window.confirm if the user want to really delete the contact.
5. Allow user to change existing phone number. Display confirmation message if the user already exist and want to change old number.

### COMPLETED WORK OUTPUT

![Screen Shot 2021-08-05 at 12 09 44 pm](https://user-images.githubusercontent.com/67087939/128280212-b50dfacc-c239-4f4e-9620-3eca38626fc8.png)

## 2.19 - 2.20

1. Display message for adding new contact.
2. Display error message when contact of deleted item is call for edit.
3. Display message for successfull update.

# The next steps will be to create the a production build.
  * Before the production build make sure the front end works with the backend URL.
    Change the frontend address base URL to backend. 

    The should work the same way as the frontend before changing and this time fetches data from backend. 

   * Production build (run in the root of the frontend)


    > npm run build 
      (This will create build folder which contains another folder static which holds our application file index.HTML.
    *Allbthe js code is minified into one file. 

    Serving static files from backend. 

    To deploy the frontend with the backend we copy the frontend build file into the root of backend repository.
     
   * For Mac/Linux 
   > cp -r build ../fullstackopenpart3-phonebook-backend
     (Or your preferred method)

    *To make express to show the frontend static we need to build-in muddleware from express call static.
      
     Add the following code in backend index.is .

     app.use(express.static('build'))

     (Now the server will get request to index.HTML)

     *Now the frontend and backend will have the same URL this means we can leave the 
      server URL which is the front part and only leave the relative URL in the frontend.
 
      /api/person

      After this change we need create a new production build 'npm run build' 
      and copy the build file to backend, to make sure any changes on front end is reflected in application.

      The frontend application is now be used from the backend.

      
 
### Part 3 Link to backend

Repository for backend : -

Back-end repository is located at

https://github.com/Amutha37/fullstackopenpart3-phonebook-backend.git
