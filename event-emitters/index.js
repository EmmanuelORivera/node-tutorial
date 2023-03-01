const TicketManager = require('./ticketManager')
const EmailService = require('./emailService')
const DatabaseService = require('./databaseService')

const ticketManager = new TicketManager(3)
const emailService = new EmailService()
const databaseService = new DatabaseService()

ticketManager.on('buy', (email, price, timestap) => {
  emailService.send(email)
  databaseService.save(email, price, timestap)
})

ticketManager.on('error', (error) => {
  console.error(`Gracefully handling our error: ${error}`)
})

const onBuy = () => {
  console.log('I will be removed soon')
}

ticketManager.on('buy', onBuy)

console.log(
  `We have ${ticketManager.listenerCount('buy')} listener(s) for the buy event`
)
console.log(
  `We have ${ticketManager.listenerCount(
    'error'
  )} listener(s) for the error event`
)

ticketManager.buy('test@email.com', 20)

ticketManager.off('buy', onBuy)

console.log(
  `We have ${ticketManager.listenerCount('buy')} listener(s) for the buy event`
)
