///<reference types="cypress"/>

describe('browser action', () => {
  it('should load book web', () =>{
      cy.visit('https://books.toscrape.com/index.html',{timeout : 4000})
      cy.url().should('include','index.html')
  });

  it('should click travel category', () =>{
    cy.visit('https://books.toscrape.com/index.html',{timeout : 4000})
      cy.get('a').contains('Travel').click()
      cy.get('h1').should('have.text','Travel')
  });
});