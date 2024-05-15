describe('single movie page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: './mockdata.json'
    })
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270`, {
      statusCode: 200,
      fixture: './singledata.json'
    })
    
  });
  it('should display information for single movie when clicked', () => {
    cy.get('.movies-display > :nth-child(1)').click()
    
  })
})