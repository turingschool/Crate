
describe('Edit Profile', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/user/login');
    cy.get('input[type="email"]')
      .type('user@crate.com')
      .get('input[type="password"]')
      .type('123456')
      .get('button:last')
      .click();
  });
  it('Should be able to login with email and password', () => {
    cy.contains('Crates for everyone!')
  });

  it('Should render the edit profile page with an edit profile button', () => {
    cy.contains('Profile').click()
    cy.contains('My profile')
    cy.contains('Edit Profile')
  });

  it('should lead to the edit form when edit profile button is clicked', () => {
    cy.contains('Profile').click()
    cy.contains('Edit Profile').click()
    cy.contains('Profile Picture')
    cy.contains('Your Name')
    cy.contains('Your Email')
    cy.contains('Your Bio')
    cy.contains('Your Street')
    cy.contains('Address Line 2')
    cy.contains('City')
    cy.contains('State')
    cy.contains('Zip Code')
    cy.contains('Save')
  });

  it('should fill out the edit profile form', () => {
    cy.contains('Profile').click()
    cy.contains('Edit Profile')
      .click()
      .get('[data-cy="name"]')
      .clear()
      .type('Mario')
      .should('have.value', 'Mario')

      .get('[data-cy="email"]').clear()
      .type('mario@crate.com')
      .should('have.value', 'mario@crate.com')

      .get('[data-cy="bio"]')
      .type('My name is Mario')
      .should('have.value', 'My name is Mario')

      .get('[data-cy="street1"]')
      .type('123 Fun St')
      .should('have.value', '123 Fun St')

      .get('[data-cy="street2"]')
      .type('PO Box 2')
      .should('have.value', 'PO Box 2')

      .get('[data-cy="city"]')
      .type('Denver')
      .should('have.value', 'Denver')

    cy.get('select').select('Alabama')
    cy.get('[data-cy="state"]');
    cy.should('have.value', 'AL')

      .get('[data-cy="zip"]')
      .type('80504')
      .should('have.value', '80504')
  })

  it('should show an error when a required field is not completed', () => {
    cy.contains('Profile').click()
    cy.contains('Edit Profile').click()

      .get('[data-cy="street1"]')
      .type('123 Fun St')
      .should('have.value', '123 Fun St')

      .get('[data-cy="street2"]')
      .type('PO Box 2')
      .should('have.value', 'PO Box 2')

      .get('[data-cy="city"]')
      .type('Denver')
      .should('have.value', 'Denver')

    cy.get('select').select('Alabama')
    cy.get('[data-cy="state"]')
    cy.should('have.value', 'AL')

    cy.contains('Save').click()
      .get('p').should('contain', 'Please enter all required fields before proceeding')
  })

  it.only('should show what was filled into the form on the profile page', () => {
    cy.contains('Profile').click()
    cy.contains('Edit Profile')
      .click()
      .get('[data-cy="name"]')
      .clear()
      .type('Sophie')
      .should('have.value', 'Sophie')

      .get('[data-cy="email"]')
      .clear()
      .type('sophie@crate.com')
      .should('have.value', 'sophie@crate.com')

      .get('[data-cy="bio"]')
      .type('My name is Sophie')
      .should('have.value', 'My name is Sophie')

      .get('[data-cy="street1"]')
      .type('123 Fun St')
      .should('have.value', '123 Fun St')

      .get('[data-cy="street2"]')
      .type('PO Box 2')
      .should('have.value', 'PO Box 2')

      .get('[data-cy="city"]')
      .type('Boulder')
      .should('have.value', 'Boulder')

    cy.get('select').select('Alabama')
    cy.get('[data-cy="state"]')
    cy.should('have.value', 'AL')

      .get('[data-cy="zip"]')
      .type('80234')
      .should('have.value', '80234')
      .get('button').click()
    cy.url().should('contain', 'user/profile')
    cy.contains('My shipping address')
      .get('H4').contains('Sophie')
  })

  it('should have a button to view previous orders', () => {
    cy.get('header')
      .contains('Subscriptions')
      .click()
      .get('H3').should('contain', 'My subscriptions')
      .get('button').contains('Past Orders')
  })

  it('should be able to view past orders', () => {
    cy.get('header')
      .contains('Subscriptions')
      .click()
    cy.get('button:first').click()
      .get('H3').contains('My Past Orders')
  })
})