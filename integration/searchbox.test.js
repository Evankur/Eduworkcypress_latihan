///<reference types="cypress"/>

describe('searchbox',function(){
beforeEach(()=>{
    cy.visit('http://zero.webappsecurity.com/')
})

it('cari searchbox dan submit',()=>{
cy.get('#searchTerm').type('some text {enter}')
})
it('hasil pencarian',()=>{
cy.get('h2').should('contain.text','Search Results:')
})
});