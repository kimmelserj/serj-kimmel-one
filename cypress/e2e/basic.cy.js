describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('displays the my full name', () => {
    cy.get('h1')
    .contains('Sergei Kimmel');
  })
  it('displays the my experience', () => {
    cy.get('h2')
    .contains('Golang/PHP Software Developer');
  })
  it('renders the image', () => {
    cy.get('img')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    })
  })
})
