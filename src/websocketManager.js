const WebSocket = require('ws')
const logger = require('./logger')

const wss = new WebSocket.Server({ port: 8081 }, () => {
   logger("log", `Websocket server started!`)
})

wss.on('connection', (ws) => {
   logger("log", `New client connected!`)
})

wss.on('listening', () => {
   logger("log", `Server listening!`)
})

async function sendData(action, ign) {
   wss.clients.forEach(function (client) {
      client.send(
         {
            "type": action,
            "ign": ign || ""
         }
      )
      logger("log",{
         "type": action,
         "ign": ign || ""
      })
   });
}

module.exports = sendData