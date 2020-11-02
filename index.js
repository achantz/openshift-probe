const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/probe', (req, res) => {
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log( `Example app listening at http://localhost:${port}`)
})