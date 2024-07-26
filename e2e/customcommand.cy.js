///<reference types="cypress"/>

describe('working inputs', () => {
  beforeEach('should load zeroapp web',()=>{
      cy.visit('http://zero.webappsecurity.com/login.html',{timeout : 10000})
      cy.url().should('include','login.html')
  });
  it('should coba login',()=>{
    cy.fixture("user").then(user =>{
        const username= user.username
        const password = user.password
       cy.login(username, password)

          cy.transaksi()
            
    });
});
});

