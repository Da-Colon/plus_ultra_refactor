/// <reference types="cypress" />

import { cleanup } from "@testing-library/react"


describe('Splash Page Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  afterEach( () => {
    cleanup()
  })


  it('should rediect to anime page', () => {
    cy.get('#nav-anime').click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/anime')
    })
  })

  it('should rediect to games page', () => {
    cy.get('#nav-games').click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/games')
    })
  })

})

describe('Games Page Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('#nav-games').click()
  })

  afterEach( async () => {
    cleanup()
  })


  it('should rediect to anime page', () => {
    cy.get('#nav-anime').click()
    cy.wait(500)
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/anime')
    })
  })

  it('should rediect to home page', () => {
    cy.get('#nav-home').click()
    cy.wait(500)
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })
  })
})

describe('Anime Page Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('#nav-anime').click()
  })

  afterEach( async () => {
    cleanup()
  })

  it('should rediect to home page', () => {
    cy.get('#nav-home').click()
    cy.wait(500)
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })
  })

  it('should rediect to games page', () => {
    cy.get('#nav-games').click()
    cy.wait(500)
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/games')
    })
  })

})