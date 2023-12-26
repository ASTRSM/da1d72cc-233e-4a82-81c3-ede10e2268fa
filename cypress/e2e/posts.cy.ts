describe('Home page posts spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('shows ten posts and more after pressing the load more button', () => {
    cy.get("[data-test='post']").should('have.lengthOf.within', 1, 10)
    cy.get("[data-test='load-more-button']").click()
    cy.get("[data-test='post']").should('have.lengthOf.greaterThan', 10)
  })

  it('navigates to the post and shows comments', () => {
    cy.get("[data-test='post-link']").first().click().then(($link) => {
      const title = $link.text()

      cy.get("[data-test='add-comment']")
      cy.get("[data-test='post-link']").should('contain.text', title)      
    })
  })

  it('throws error if the inputs are empty and title string is over 150 characters', () => {
    cy.get("[data-test='add-post']").click()

    cy.get("[data-test='title-error']").contains('Title is Required')
    cy.get("[data-test='body-error']").contains('Body is Required')

    cy.get("[data-test='title-input']").type(
      "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who"
    )

    cy.get("[data-test='add-post']").click()

    cy.get("[data-test='title-error']").contains(
      'Must be 150 or fewer characters long'
    )
  })

  it('succesfully adds one post', () => {
    cy.get("[data-test='title-input']").type('Test Title')
    cy.get("[data-test='body-input']").type('Test Body')

    cy.get("[data-test='add-post']").click()

    cy.contains('Test Title')
    cy.contains('Test Body')
    cy.get('#post-success')
  })

  it('throws error 404 if the post is not found', () => {
    cy.get("[data-test='title-input']").type('Test Title')
    cy.get("[data-test='body-input']").type('Test Body')
    cy.get("[data-test='add-post']").click()
    cy.get('#post-success')

    cy.get("[data-test='post-link']").first().click()

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('NEXT_NOT_FOUND')) {
        return false
      }
    })
  })
})
