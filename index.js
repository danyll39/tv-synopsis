const express = require('express')
const showdata = require('./showdata')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

app.get('/seasons/:id', (request, response) => {
  const seasonAll = showdata.seasons[request.params.id - 1]

  return response.render('seasons', { seasonAll })
})

app.all('*', (request, response) => {
  return response.sendStatus
})

app.listen(1144, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1144...')
})
