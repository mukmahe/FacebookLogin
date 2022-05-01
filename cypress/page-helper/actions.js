///<reference types="Cypress"/>

function getWebElement(locator) {
    let locatorType = locator.toString().split(':')[0]
    let locatorString = locator.toString().split(':')[1]
    switch (locatorType) {
        case 'id':
            return cy.get(`[id='${locatorString}']`)
            break
        case 'css':
            return cy.get(locatorString)
            break
        case 'text':
            return cy.contains(locatorString)
            break
        default:
            throw new Error('Invalid locator type passed for ' + locator)
    }
}

function log(log) {
    cy.log(log)
}

function enterText(locator, text, options) {
    switch (options) {
        case 'clear':
            getWebElement(locator).clear().type(text)
            break
        default:
            getWebElement(locator).clear().type(text)
    }
}

function waitForDOMLoad(locator, action, text){
    cy.waitUntil(() =>
      getWebElement(locator)
        .as('ele')
        .wait(10) // for some reason this is needed, otherwise next line returns `true` even if click() fails due to detached element in the next step
        .then($el => Cypress.dom.isAttached($el)),
    { timeout: 1000, interval: 10 })
    if(action==='click')
      cy.get('@ele')
      .click()
      else if(action==='type')
      cy.get('@ele').clear().type(text)
}

function click(locator, options = {}) {
    getWebElement(locator).click(options)
}

module.exports = {
    getWebElement,
    click,
    enterText,
    log,
    waitForDOMLoad
}