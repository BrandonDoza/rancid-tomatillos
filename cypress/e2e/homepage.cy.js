describe('homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    
  });
  it('should display movies', () => {
    cy.contains('nav', 'Rancid Tomatillos')
    .get('.movies-display').find('.movie-card').should('have.length', 10)
    .get('.movie-card').first().contains('Black Adam')
    .get('.movie-card').last().contains('Maneater')
    
  })
  
})