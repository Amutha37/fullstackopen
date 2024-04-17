## 2.12 - 2.14 Exercises

I) Create app to list all the contries fron the REST API URL below.

- The API http://restcountries.au

- List of all countries is fetched from `https://restcountries.com/v3.1/all` (update this link with new version if the REST API does not work)

- Display single match or list of matches on search by country name.

  In this project the weather information is fetched from REST API `http://api.weatherstack.com/current?access_key=${key}&query=${name}` is used.

  \*(Please check the for new version if the weather data does not display, it may be because of changes to keyObject and value in new version )

II) Use search field to match max of 10 countries.

III) Use buttons to display information on population, capital and temperature for each country.

![Screen Shot 2021-08-05 at 11 13 23 am](https://user-images.githubusercontent.com/67087939/128279520-5d275f34-3952-429b-8100-c774e24949c9.png)

# To run this app install :

> `npm install axios` > `npm install json-server --save-dev`


<details>
<summary>

### $\color{cyan}{Fixing\ Digital\ Envolope\  routine\ error\ to\ or\ legacy\ error}$

 </summary>

 Set NODE_OPTIONS Environment Variable:

Unix-like (Linux, macOS, Git bash, etc.):

> `export NODE_OPTIONS=--openssl-legacy-provider`


Windows Command Prompt:

>`set NODE_OPTIONS=--openssl-legacy-provider`

PowerShell:

`$env:NODE_OPTIONS = "--openssl-legacy-provider"`

Additionally, integrate these into scripts in your package.json:

> `
"scripts": {
  "start": "export NODE_OPTIONS=--openssl-legacy-provider && ng serve" // use set instead of export in case of windows machine
}`


Alternatively, install cross-env globally (npm install --global cross-env) and use it in your scripts:

`
"scripts": {
  "start": "cross-env NODE_OPTIONS=--openssl-legacy-provider && ng serve"
}
`

` 
// "start": "react-scripts start",
    // "build": "react-scripts build",
    
    `

</details>





<details>
<summary>

### $\color{cyan}{STACKOVERFLOW\ link\ for\  the\ above\  error\ fixing\ options}$


 </summary>

https://stackoverflow.com/questions/74797727/error-error0308010cdigital-envelope-routinesunsupported

</details>

