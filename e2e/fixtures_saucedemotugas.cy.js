///<reference types="cypress"/>

describe('working inputs', () => {
  beforeEach('should saucedemo',()=>{
      cy.visit('https://www.saucedemo.com/v1/index.html',{timeout : 10000})
      cy.url().should('include','index.html')
  });
  //it('should isi username',()=>{
     // cy.get('#user-name').clear()
      //cy.get('#user-name').type('username')
  //});
 // it('should isi password',()=>{
    //cy.get('input[name="password"]').clear()
    //cy.get('input[name="password"]').type('password')
//});
it('should coba login',()=>{
  cy.fixture("user").then(user =>{
      const username = user.username
      const password = user.password

      cy.get('#user-name').clear()
      cy.get('#user-name').type(username)

  cy.get('input[name="password"]').clear()
  cy.get('input[name="password"]').type(password)

  cy.get('#login-button').click
  
  });

});
});
describe('product', () => {
  beforeEach('should inventory web',()=>{
    cy.visit('https://www.saucedemo.com/v1/inventory.html',{timeout : 10000})
      cy.url().should('include','/inventory.html')
  });
  it('title',()=>{
    cy.get('.product_label').should('contain','Products')
});
//test filter sort
it('sort',()=>{
  cy.get('.product_sort_container').select('Price (low to high)')
  cy.get('.product_sort_container').select('Price (high to low)')
  cy.get('.product_sort_container').select('Name (A to Z)')
  cy.get('.product_sort_container').select('Name (Z to A)')
});
//test deskripsi
it('description',()=>{
  cy.get('.inventory_list > :nth-child(1)').should('contain','Backpack')
  cy.get('.inventory_list > :nth-child(2)').should('contain','Bike')
})
//test tombol product
it('Test product to finish ',()=>{
  cy.contains('Backpack').click()
  cy.get('.btn_primary').click()
  cy.get('.bm-burger-button > button').click()
  cy.get('#inventory_sidebar_link').click()

//Test produk 2
  cy.contains('Bike').click()
  cy.get('.btn_primary').click()
  cy.get('.btn_secondary').click()
  cy.get('.bm-burger-button > button').click()
  cy.get('#inventory_sidebar_link').click()
  cy.get(':nth-child(2) > .pricebar > .btn_primary').click()

  //Masuk ke chart
cy.get('[class="svg-inline--fa fa-shopping-cart fa-w-18 fa-3x "]').click()
cy.get(':nth-child(3) > .cart_item_label').contains('Backpack')
cy.get(':nth-child(4) > .cart_item_label').contains('Bike')

// masuk ke checkout
cy.get('.btn_action').click()

cy.get('[data-test="firstName"]').type('Evan')
cy.get('[data-test="lastName"]').type('Kurni')
cy.get('[data-test="postalCode"]').type('10111213')
cy.get('.btn_primary').click()

//selesai pembelian
cy.get('.btn_action').click()

//Menu balik 
cy.get('.bm-burger-button > button').click()
cy.get('#inventory_sidebar_link').click()
cy.get('.bm-burger-button > button').click()
cy.get('#about_sidebar_link')


//Menu balik ke list procuk
//cy.get('.cart_footer > .btn_secondary').click()


});
})


