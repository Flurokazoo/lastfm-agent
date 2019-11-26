const express = require('express')
const { WebhookClient } = require('dialogflow-fulfillment')
const app = express()

const welcome = require('./fulfillments/default/welcome')
const fallback = require('./fulfillments/default/fallback')

app.get('/', (req, res) => res.send('online'))
app.post('/dialogflow', express.json(), (req, res) => {
  const agent = new WebhookClient({ request: req, response: res })

  let intentMap = new Map()
  intentMap.set('Default Welcome Intent', welcome.fulfillment)
  intentMap.set('Default Fallback Intent', fallback.fulfillment)
  agent.handleRequest(intentMap)
})

app.listen(process.env.PORT || 8080)