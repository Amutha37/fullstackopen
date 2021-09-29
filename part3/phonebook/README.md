# Phonebook backend Exercises 3..2 -3.6

### 3.1 List item of using base URL

.In this exercise I have to implement the return of hardcoded list of phonebook entris at the URL `http://localhost:3001/api/persons` using Node express.

### 3.2 List the information from of the api/person length and times.

.Expending the above exercise to implement the return summary of information "Phonebook has info for 4 people" and time of processing the request in the URL `http://localhost:3001/api/info`.

### 3.3 Search single item

.Display information for a single phonebook entry exp.` URL http://localhost:3001/api/persons/5`. using unique id.

### 3.4 HTTP DELETE

.Delete data using id parameter from URL
.To test the functionality if the data been delete run "send request" on the URL
`Get http://localhost:3001/api/persons/3`.
.Folder name 'request' is implemented to run REST

### 3.5 HTTP POST

.Add new note.
.Auto generate header content-type: with the help of json-parser / app.use(express.json()).
.Retrive data from body property of the request object.

.Create hard code data object to add new note.

### 3.6 Error handling for blank entry and double entry.

### 3.5 HTTP POST

.Validation check to display error message if name or number is missing.
. Prevent double entry.

### 3.6 Configure Morgan logger to show HTTP POST data log.

![Screen Shot 2021-09-27 at 11 25 26 am](https://user-images.githubusercontent.com/67087939/134832408-7e5b1672-f61a-4d11-844f-5200f8a49596.png)
