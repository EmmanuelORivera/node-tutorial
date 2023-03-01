const TicketManager = require('./ticketManager')

const ticketManager = new TicketManager(10)

ticketManager.on('buy', () => {
  console.log('Someone bougth a ticket!')
})

ticketManager.buy('test@email.com', 20)
ticketManager.buy('test@email.com', 20)

ticketManager.once('buy', () => {
  console.log('This is called once')
})

ticketManager.buy('test@email.com', 20)
ticketManager.buy('test@email.com', 20)
