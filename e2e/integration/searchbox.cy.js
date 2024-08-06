///<reference types="cypress"/>
require('cypress-xpath');

describe('searchbox',function(){
  beforeEach(()=>{
      cy.visit('http://zero.webappsecurity.com/',{timeout : 10000})
      cy.url().should('include','http://zero.webappsecurity.com/')
  })
  
  it('cari searchbox dan submit',()=>{
  cy.get('#searchTerm').type('some text {enter}')
  })
})
  describe('hasil pencariannya',function(){
    beforeEach(()=>{
        cy.visit(' http://zero.webappsecurity.com/search.html?searchTerm=',{timeout : 10000})
        cy.url().should('include','search.html?')
    })
  it('mencari search',()=>{
    cy.get('h2').contains('Search Results:')
    cy.xpath('//input[@id="searchTerm"]').type('online {enter}')
    cy.xpath('//a[.="Zero - Free Access to Online Banking"]').should('have.attr','href','/online-banking.html')
  })
})


//describe('hasil pencariannya',function(){
 // beforeEach(()=>{
      //cy.visit(' http://zero.webappsecurity.com/search.html?searchTerm=online',{timeout : 10000})
      //cy.url().should('include','search.html?searchTerm=online')
  //})
  //it('hasil pencarian menjadi',()=>{
  //cy.xpath('//a[.="Zero - Free Access to Online Banking"]').should('have.attr','href','/online-banking.html')
  
//})
//})

