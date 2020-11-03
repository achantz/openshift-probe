const express = require('express')
const moment = require('moment')
const app = express()
const port = 8080


app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.get('/probe', (req, res) => {
  res.sendStatus(200)
  const now = moment().utc().local().format('YYYY-MM-DD HH:mm:ss')
  console.log(`${now} - Probe request received.`)
})

app.listen(port, () => {
  console.log( `Example app listening at http://localhost:${port}`)
})