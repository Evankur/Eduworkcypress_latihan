// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {

    cy.get('#user_login').clear()
   cy.get('#user_login').type(username)
        
    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)
        
    cy.get ('input[name="submit"]').click()
})
Cypress.Commands.add('transaksi',(pay,akun,amount,date)=>{
  
    //cy.get('#sp_payee').click()
cy.get('#sp_payee').select('Apple')
cy.get('#sp_payee').should('be.visible')

//cy.get('#sp_payee').click()
cy.get('#sp_account').select('Loan')
cy.get('#sp_account').should('be.visible')

cy.get('#sp_amount').type('199')
cy.get('#sp_amount').should('be.visible')

cy.get('#sp_date').type('2024-10-12')
cy.get('#sp_date').should('be.visible')


cy.get('#pay_saved_payees').click()

})
