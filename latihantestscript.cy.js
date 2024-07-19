describe('Test pertama', () => {
  it('clicking "type"show right heading', () => {
    cy.visit('https://example.cypress.io')

    cy.pause()

    cy.contain('type').click()

    cy.url().should('include','/commands/location')

    cy.get('action-email')
    .type('fake@email.com')
    .should('have.value','fake@email.com')
  })
})