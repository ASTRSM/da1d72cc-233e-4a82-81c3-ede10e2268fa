describe('explore page spec', () => {
  it('shows data for what it searched for', () => {
    cy.visit('localhost:3000/explore')
    cy.get("[data-test='post']").should('not.exist')
    cy.get("[data-test='query-input']").type('love')
    cy.get("[data-test='post']")
      .should('have.lengthOf.within', 0, 10)
      .each(($el) => {
        expect($el.text().toLowerCase()).to.contains('love')
      })

    cy.get("[data-test='post']").should('have.lengthOf.within', 1, 10)
    cy.get("[data-test='load-more-button']").click()
    cy.get("[data-test='post']").should('have.lengthOf.greaterThan', 10)

    cy.get("[data-test='post']").last().contains('love', { matchCase: false })

    cy.get("[data-test='query-input']").type('g2938eghewog832')
    cy.get("[data-test='post']").should('not.exist')
    cy.contains('404')
  })

  it('shows data from params query', () => {
    cy.visit('http://localhost:3000/explore?query=love')

    cy.get("[data-test='post']")
      .should('have.lengthOf.within', 0, 10)
      .each(($el) => {
        expect($el.text().toLowerCase()).to.contains('love')
      })
  })
})
