const express = require('express')
const showdata = require('./showdata')


const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  console.log('lol')

  return response.render('index', { showdata })
})

app.get('/seasons/:id', (request, response) => {
  // console.log(showdata.find((season) => season.id === parseInt(request.params.id)))
  console.log(showdata.seasons[request.params.id - 1])
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
