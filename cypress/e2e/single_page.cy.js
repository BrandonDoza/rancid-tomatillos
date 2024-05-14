describe('single movie page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270`, {
      statusCode: 200,
      fixture: './singledata.json'
    })
  });
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})