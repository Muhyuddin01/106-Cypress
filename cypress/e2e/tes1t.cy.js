/// <reference types="cypress"/>

it('Test Google', () => {

    cy.visit('https://google.com')
    cy.get('.gLFyf')
    .click()
    .type('this is a test google{enter}')





})