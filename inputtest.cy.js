describe('working inputs', () => {
    beforeEach('should load zeroapp web',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html',{timeout : 10000})
        cy.url().should('include','login.html')
    });
    it('should isi username',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html',{timeout : 10000})
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });
    it('should isi password',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html',{timeout : 10000})
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });
    it('should isi password',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html',{timeout : 10000})
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });
    it('should checklist',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html',{timeout : 10000})
        cy.get('[type="checkbox"]').check()
        cy.get('[type="checkbox"]').first().check()
    });
  });

