describe('Blog app', () => {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Ashaa',
      username: 'AshaaM',
      password: 'passAshaa',
    }
    cy.request('POST', 'http://localhost:3003/api/users', user)
    cy.visit('http://localhost:3000')
    // cy.contains('Log In').click()
  })
  it('Login form is shown', () => {
    cy.contains('Log In').click()
  })
  // test loggin success 5:18
  describe('Login', () => {
    it('fails with wrong credentials', () => {
      cy.contains('Log In').click()
      cy.get('#username').type('AshaaM')
      cy.get('#password').type('passAshaaa')
      cy.get('#login-button').click()

      cy.get('.error')
        .should('contain', 'Wrong user name or password!')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
        .and('have.css', 'border-style', 'solid')

      // ! border-style, border-radiusand padding, will pass in Chrome or Electron, but fail in Firefox:

      cy.get('html').should('not.contain', 'Ashaa Muhun')
    })

    it('succed with correct credentials', () => {
      cy.contains('Log In').click()
      cy.get('#username').type('AshaaM')
      cy.get('#password').type('passAshaa')
      cy.get('#login-button').click()
      cy.contains('Ashaa logged-in')
    })
  })
  // ? Test for creating new common and useing custom common to avoid UI loggin
  // * Custom commands are declared in cypress/support/commands.js. The code for logging  cy.request, like all Cypress commands, are promises

  describe('When logged in', () => {
    beforeEach(function () {
      cy.login({ username: 'AshaaM', password: 'passAshaa' })
    })
    // check content exist
    it('a new blog can be created', () => {
      cy.contains('Create new blog list').click()
      cy.get('#title').type('End to end testing')
      cy.get('#author').type('Matti Luukkainen')
      cy.get('#url').type(
        'https://fullstackopen.com/en/part5/end_to_end_testing/#some-things-to-note'
      )

      cy.contains('Save').click()
      cy.contains('End to end testing')
      cy.contains('Matti Luukkainen')
      cy.contains(
        'https://fullstackopen.com/en/part5/end_to_end_testing/#some-things-to-note'
      )
    })
  })
})
