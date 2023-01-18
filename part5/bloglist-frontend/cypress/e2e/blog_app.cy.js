describe('The Home Page', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
    // cy.contains('Log In').click()
  })
//    it('a new blog can be created', () => {
//  cy.contains('Log In')
// })


describe('When logged in', () => {
  beforeEach(function() {
 cy.contains('Log In').click()
//  get the content
  cy.get('#username').type('Dell')
  cy.get('#password').type('Dellpass')
  cy.get('#login-button').click()
  cy.contains('Amutha M logged-in')
})
// check content exist
it('a new blog can be created', () => {
cy.contains('Create new blog list').click()
cy.get('#title').type('a blog created by cypress')
cy.get('#author').type('Ashaa')
cy.get('#url').type('https://docs.cypress.io/guides/overview/why-cypress')

cy.contains('Save').click()
cy.contains('a blog created by cypress')
cy.contains('Ashaa')
cy.contains('https://docs.cypress.io/guides/overview/why-cypress')
})
})
})