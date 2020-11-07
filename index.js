const express = require('express')
const showdata = require('./showdata')


const app = express()

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  console.log(JSON.stringify(showdata.seasons.episodes))

  return response.render('index', { showdata })
})

app.all('*', (request, response) => {
  return response.sendStatus
})

app.listen(1144, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1144...')
})
