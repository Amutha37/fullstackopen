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
  })
  it('Front page of login form is shown', () => {
    cy.contains('Log In')
    cy.contains('Blog List')
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

    it('Succeeded login with correct credentials', () => {
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
    it('A new blog can be created', () => {
      cy.contains('Create new blog list').click()
      cy.get('#title').type('End to end testing')
      cy.get('#author').type('Matti Luukkainen')
      cy.get('#url').type(
        'https://fullstackopen.com/en/part5/end_to_end_testing/#some-things-to-note'
      )

      cy.contains('Save').click()
      cy.contains(
        'https://fullstackopen.com/en/part5/end_to_end_testing/#some-things-to-note'
      )
    })

    // create several blogs and test for likes button and delete
    describe('create several blogs for exist', function () {
      beforeEach(function () {
        cy.createBlog({
          title: 'Cypress Testing',
          author: 'Cyress',
          url: 'https://docs.cypress.io/guides/overview/why-cypress',
        })
        cy.createBlog({
          title: 'CSS Grid',
          author: 'Chris House',
          url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
        })
        cy.createBlog({
          title: 'W3School',
          author: 'W3School',
          url: 'https://www.w3schools.com/whatis/whatis_fullstack.asp',
        })
      })

      it('Can add likes to a blog', function () {
        // add 1 likes
        cy.get('.blog').then((blogs) => {
          cy.wrap(blogs[0]).contains('More...').click()
          cy.wrap(blogs[0]).contains('+Likes').click()
          // add 2 likes
          cy.wrap(blogs[2]).contains('More...').click()
          cy.wrap(blogs[2]).contains('+Likes').click()
          cy.wrap(blogs[2]).contains('+Likes').click()
        })
        cy.get('.blog').then((blogs) => {
          cy.wrap(blogs[0]).contains(1)
          cy.wrap(blogs[2]).contains(2)
        })
      })

      // deleting a blog
      it('Deleting a blog', function () {
        // deleting 2nd blog
        cy.get('.blog').then((blogs) => {
          cy.wrap(blogs[1]).contains('More...').click()
          cy.wrap(blogs[1]).contains('Remove').click()
          cy.get('html').should('not.contain', 'CSS Grid')
        })
      })
    })
  })

  // test the blogs are in accending order by it highest likes count
  describe('Blogs should be in asccending orders list', () => {
    beforeEach(function () {
      cy.login({ username: 'AshaaM', password: 'passAshaa' })
        .createBlog({
          title: 'test1',
          author: 'Amuth',
          url: 'https://docs.cypress.io/',
        })
        .createBlog({
          title: 'Test2',
          author: 'Amutha',
          url: 'https://css-tricks.com/snippets/css/',
        })
        .createBlog({
          title: 'Test3',
          author: 'Ash',
          url: 'https://css-tricks.com',
        })
    })

    describe('create several blogs for exist', function () {
      it('add like for blogs order and check the blogs in asccending orders', () => {
        // add 1 likes
        cy.get('.blog').then((blogs) => {
          cy.wrap(blogs[0])
            .contains('More...')
            .click()
            .wait(500)
            .wrap(blogs[0])
            .contains('+Likes')
            .click()
            .wait(500)
          // add 3 likes
          cy.wrap(blogs[1])
            .contains('More...')
            .click()
            .wait(500)
            .wrap(blogs[1])
            .contains('+Likes')
            .click()
            .wait(500)
            .wrap(blogs[1])
            .contains('+Likes')
            .click()
            .wait(500)
            .wrap(blogs[1])
            .contains('+Likes')
            .click()
            .wait(500)
          // 2 likes
          cy.wrap(blogs[2])
            .contains('More...')
            .click()
            .wait(500)
            .wrap(blogs[2])
            .contains('+Likes')
            .click()
            .wait(500)
            .wrap(blogs[2])
            .contains('+Likes')
            .click()
            .wait(500)
        })
        cy.get('.blog').then((blogs) => {
          cy.wrap(blogs[0])
            .contains(3)
            .wrap(blogs[1])
            .contains(2)
            .wrap(blogs[2])
            .contains(1)
        })
      })
    })
  })

  it('then example', function () {
    cy.get('button').then((buttons) => {
      console.log('number of buttons', buttons.length)
      cy.wrap(buttons[0]).click()
    })
  })
})
