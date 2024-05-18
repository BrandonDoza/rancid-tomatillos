describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: './mockdata.json'
    })
  });
  it('should display error page if user visits invalid URL', () => {
    cy.contains('Error, Page Not Found')
    cy.get('.links').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

})