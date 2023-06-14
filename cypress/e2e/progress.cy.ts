describe('home page', () => {
  it('user sees the main header and can click on accordions', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Lodgify Grouped Tasks')
    cy.contains('General Info').click();
    cy.contains('Add email')
  })
})