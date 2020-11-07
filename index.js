const express = require('express')
const showdata = require('./showdata')


const app = express()

app.set('view engine', 'pug')

app.get('/', (request, response) => {
 

  return response.render('index')
})

app.all('*', (request, response) => {
  return response.sendStatus
})

app.listen(1144, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1144...')
})
