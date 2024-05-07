//your JS code here. If required.
it('testing modal close functionality', () => {
  cy.get('button').first().click().then(() => {
    cy.get('.modal').should('be.visible');
    // Use contains selector
    cy.get('.modal-header button').contains('close').click();
    cy.get('.modal').should('not.be.visible');
  });
});