///<reference types="cypress"/>
require('cypress-xpath');

describe('navbar latihan', () => {
  beforeEach(() => {
    cy.visit('http://zero.webappsecurity.com/index.html',{timeout : 10000})

  })
  it('should display online banking',()=>{
  cy.get('#onlineBankingMenu').click()
  cy.url().should('include','online-banking.html')
  cy.get('h1').should('be.visible')
  cy.get('#account_summary_link').click()
  cy.get('#user_login').type('username')
  cy.get('#user_password').type('password')
  cy.get('.btn').click()
  cy.url().should('include','account-summary.html')
  cy.get('h2').should('be.visible')
  cy.get('#account_activity_tab > a').click()
  cy.url().should('include','account-activity.html')
  cy.get('#transfer_funds_tab > a').click()
  cy.url().should('include','transfer-funds.html')
  cy.get('h2').should('contain.text','Transfer Money & Make Payments')
  cy.get('#pay_bills_tab > a').click()
  cy.url().should('include','pay-bills.html')
  cy.get('h2').should('contain.text','Make payments to your saved payees')
  cy.get('.ui-tabs-nav > :nth-child(2) > a').click()
  cy.get('h2').should('contain.text','Who are you paying?')
  cy.get('.ui-tabs-nav > :nth-child(3) > a').click()
  cy.get('h2').should('contain.text','Purchase foreign currency cash')
  cy.get('#online_statements_tab').click()
  cy.url().should('include','online-statements.html')
  cy.get('h2').should('contain.text','Statements & Documents')
  })

  it('should display feedback',()=>{
  cy.get('#feedback').click()
  cy.url().should('include','feedback.html')
  cy.get('#name').should('be.visible','Your Name')
  cy.get('#email').should('be.visible','Your email address')
  cy.get('#subject').should('be.visible','Subject')
  cy.get('.btn-signin').click()
  cy.get('[type="reset"]').click()
  })

  it('should display homepage',()=>{
  cy.contains('Zero Bank').click()
  cy.url().should('include','index.html')
  })

 // it('should click more service ',()=>{
   // cy.get('#online-banking').click()
    //cy.url().should('include','online-banking.html')
    //cy.get('#pay_bills_link').click()
    //cy.get('#user_login').type('username')
    //cy.get('#user_password').type('password')
    //cy.get('.btn').click()
    //cy.get('#account_activity_tab > a').click()
    //cy.xpath('//a[.="Show Transactions"]').should('contain.text','Show Transactions')
    
    //})


  //btn btn-small btn-info
})