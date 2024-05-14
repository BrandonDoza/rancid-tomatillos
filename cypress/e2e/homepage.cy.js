describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: './mockdata.json'
    })
  });
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})