describe('homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: './mockdata.json'
    })
  });
  it('should display movies', () => {
    cy.contains('nav', 'Rancid Tomatillos')
    .get('.movies-display').find('.movie-card').should('have.length', 10)
    .get('.movie-card').first().contains('Black Adam')
    .get('.movie-card').last().contains('Maneater')
    // cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270`, {
    //   statusCode: 200,
    //   fixture: './singledata.json'
    // })
    // .get('.movies-display > :nth-child(1)').click()
    
  })
  
})