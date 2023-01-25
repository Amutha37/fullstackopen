describe('The Home Page', () => {
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
    it('succed with correct credentials', () => {
      cy.contains('Log In').click()
      cy.get('#username').type('AshaaM')
      cy.get('#password').type('passAshaa')
      cy.get('#login-button').click()
      cy.contains('logged-in')
    })

    it('fails with wrong credentials', () => {
      cy.contains('Log In').click()
      cy.get('#username').type('AshaaM')
      cy.get('#password').type('passAshaaa')
      cy.get('#login-button').click()
      // cy.contains('logged-in')
    })
  })

  // describe('When logged in', () => {
  //   beforeEach(function () {
  //     cy.contains('Log In').click()
  //     //  get the content
  //     cy.get('#username').type('Ash')
  //     cy.get('#password').type('passAshaa')
  //     cy.get('#login-button').click()
  //     cy.contains('logged-in')
  //   })
  //   // check content exist
  //   it('a new blog can be created', () => {
  //     cy.contains('Create new blog list').click()
  //     cy.get('#title').type('a blog created by cypress')
  //     cy.get('#author').type('Ashaa')
  //     cy.get('#url').type('https://docs.cypress.io/guides/overview/why-cypress')

  //     cy.contains('Save').click()
  //     cy.contains('a blog created by cypress')
  //     cy.contains('Ashaa')
  //     cy.contains('https://docs.cypress.io/guides/overview/why-cypress')
  //   })
  // })
})
