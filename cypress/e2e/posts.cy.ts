describe('Home page posts spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('shows ten posts and more after pressing the load more button', () => {
    cy.get("[data-test='post']").should('have.lengthOf.within', 1, 10)
    cy.get("[data-test='load-more-button']").click()
    cy.get("[data-test='post']").should('have.lengthOf.greaterThan', 10)
  })

})
