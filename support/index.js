import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('list not defined')) {
    return false
  }  return false
})