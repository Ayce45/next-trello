// @ts-ignore
describe('Trello feature', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })
  it('Init data', () => {
    cy.get('#initDataset').click()
    cy.contains('My first card')
    cy.contains('My second card')
    cy.contains('Followed card')
    cy.contains('Followed card with description')
  })
  it('Add list', () => {
    cy.get('#showListForm').click()
    cy.get('input').type('cypress')
    cy.get('#addList').click()
    cy.contains('cypress')
  })
  it('Remove list', () => {
    cy.contains('My first list')
    cy.get('.deleteList').first().click()
    cy.on('window:confirm', () => true);
    cy.contains('My first list').should('not.exist')
  })
  it('Add card', () => {
    cy.get('#showCardForm').click()
    cy.get('textarea').type('cypress')
    cy.get('#addCard').click()
    cy.contains('cypress')
  })
  it('Remove card', () => {
    cy.contains('My first card')
    cy.get('#card-1').click()
    cy.get('#delete').click()
    cy.on('window:confirm', () => true);
    cy.contains('My first card').should('not.exist')
  })
  it('Follow card', () => {
    cy.contains('Followed card')
    cy.get('#card-1').contains('eye').should('not.exist')
    cy.get('#card-1').click()
    cy.get('#follow').click()
    cy.get('#close').click()
    cy.get('#card-1').contains('eye').should('not.exist')
  })
  it('Unfollow card', () => {
    cy.contains('Followed card')
    cy.get('#card-3').contains('eye')
    cy.get('#card-3').click()
    cy.get('#follow').click()
    cy.get('#close').click()
    cy.get('#card-3').contains('eye').should('not.exist')
  })

  it('Description card', () => {
    cy.contains('Followed card with description')
    cy.get('#list-2 #card-1').contains('paragraph')
    cy.get('#list-2 #card-1').click()
    cy.contains('My first description')
  })

  it('Add description card', () => {
    cy.get('#list-1 #card-1').click()
    cy.get('#showDescriptionForm').click()
    cy.get('textarea').type('cypress')
    cy.get('#save').click()
    cy.contains('cypress')
    cy.get('#close').click()
  })

  it('Remove description card', () => {
    cy.get('#list-2 #card-1').click()
    cy.get('#showDescriptionForm').click()
    cy.get('textarea').clear()
    cy.get('#save').click()
    cy.contains('My first description').should('not.exist')
    cy.get('#close').click()
    cy.get('#list-2 #card-1').contains('paragraph').should('not.exist')
  })
})