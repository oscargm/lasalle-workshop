/// <reference types="cypress" />

describe('Dummy worflow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5070');
  });

  it('can login', () => {
    cy.get("input[name='username']").type('oscar@roche.com');
    cy.get("input[name='password']").type('oscar');
    cy.get('button').click();

    cy.contains('Dashboard').should('be.visible');
  });
});
