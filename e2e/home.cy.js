describe('Home Page', () => {
  it.only('Home page test', () => {
    cy.visit('https://www.youtube.com/')
    cy.get("div.yt-spec-button-shape-next__button-text-content>span[role='text']").contains('Sign in');
  })
})

describe('Verify YT Sign In', () => {
  it.only('YT Sign in test', () => {
    cy.visit('https://www.youtube.com/')
    cy.get("div.yt-spec-button-shape-next__button-text-content>span[role='text']").contains('Sign in');
  })
})