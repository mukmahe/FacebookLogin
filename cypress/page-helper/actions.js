///<reference types="Cypress"/>

function getWebElement(locator) {
    let locatorType = locator.split(':')[0]
    let locatorString = locator.split(':')[1]

    switch (locatorType) {
        case 'id':
            return cy.get('[id=`{locatorString}`]')
            break
        case 'css':
            return cy.get('`locatorString}`]')
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

function enterText(locator, text) {
    getWebElement(locator).type(text)
}

function click(locator, options = {}) {
    getWebElement(locator).click(options)
}

module.exports = {
    getWebElement,
    click,
    enterText,
    log
}