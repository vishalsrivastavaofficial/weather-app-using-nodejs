const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=bdedb545aaa71cee04ffad5149c92072&query=Kanpur'

request({url: url, json: true}, (error, response) => {
    console.log(`Current Temperature of ${response.body.location.name} city is
     ${response.body.current.temperature} taken at ${response.body.current.observation_time}`)
})

console.log('Hello User')