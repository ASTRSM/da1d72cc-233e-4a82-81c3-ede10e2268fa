describe('Side navigation spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('clicks the Links and navigates to destinated page', () => {
    cy.get("[data-test='explore']").click()
    cy.url().should('include', '/explore')

    cy.get("[data-test='home']").click()
    cy.url().should('include', '/')

    cy.get("[data-test='profile']").click()
    cy.url().should('include', '/profile')
  })

  it('changes the type on smaller screen', () => {
    cy.viewport('iphone-6')
    cy.contains('Ambrosia').should('not.be.visible')
  }) 
})