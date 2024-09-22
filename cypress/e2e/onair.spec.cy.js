describe('teste onair spec', () => {
  it('webapp deve estar online', () => {
    // um simples comentário
        
    cy.visit('http://localhost:3000')
    cy.title()
       .should('eq', 'Samurai Barbershop by QAninja')
  })
})
