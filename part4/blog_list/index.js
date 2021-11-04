const http = require('http')

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Blog list Test run with nodemon')
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
