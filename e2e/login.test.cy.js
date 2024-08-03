///<reference types="cypress"/>
require('cypress-xpath');

describe('login/logout', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html',{timeout : 10000})
    cy.url().should('include','index.html')
    cy.get('#signin_button').click()
//todo
  })
  
  it('should try login invalid data',()=>{
    cy.get('#login_form').should('be.visible')
    cy.get('#user_login').type('invalid user')
    cy.get('#user_password').type('invalid pass')
    cy.get('.btn').click()
    cy.get('.alert').should('be.visible').and('contain.text','Login and/or password are wrong')
    
});

//it('should error message',()=>{
  //todo 
 // cy.get('.alert').should('be.visible').and('contain.text','Login and/or password are wrong')
//});
describe('login/logout', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html',{timeout : 10000})
    cy.url().should('include','index.html')
    cy.get('#signin_button').click()

  })
it('should try login valid data',()=>{

  cy.fixture("user").then(user =>{
    const username = user.username
    const password = user.password

    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
    cy.get('#user_password').clear()
    cy.get('#user_password').type(password)
    cy.get('.btn').click()
   
    cy.get('h2').should('contain.text','Cash Accounts')

    cy.contains('username').click()
    cy.get('#logout_link').click()
    cy.get('strong').should('contain.text','Home')
    cy.get('strong').should('contain.text','Online Banking')
    cy.get('strong').should('contain.text','Feedback')
    cy.get('#online-banking').click() 
    cy.get('#signin_button').should('be.visible','Signin')
    
  
  })
});

//it('should try logout from web',()=>{
 //cy.contains('username').click()
  //cy.get('#logout_link').click()
  //cy.get('strong').should('contain.text','Home')
  //cy.get('#signin_button').should('be.visible','Signin')
});
});



