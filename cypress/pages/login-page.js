///<reference types="Cypress"/>
const actions = require('../page-helper/actions')

const locators = {
    email: "id:email",
    password: "id:pass",
    login: "css:[data-testid='royal_login_button']",
    forgotPasswordErrMsg: "text:The password that you've entered is incorrect."
}

function visit(url) {
    cy.visit(url)
    actions.log('Opened url = ' + url)
}

function login(emailId, passwordText) {
    actions.enterText(email, emailId)
    actions.enterText(password, passwordText)
    actions.click(login)
    actions.log('Logged In with user emailId & password combination ' + email + "  " + passwordText)
}

function verifyURL(expectedURL) {
    cy.url().should('contain.text', expectedURL)
    actions.log('Redirection is happening correct to production URL')
}

function verifySuccessfulLogin(emailId) {
    actions.getWebElement(sucessLogin).should('be.visible')
    actions.log('Login Success for the user ' + emailId)
}

function verifyErrorMessage(email) {
    actions.getWebElement(forgotPasswordErrMsg).should('be.visible')
    actions.log('The error message for incorrect emailid is visible '+email)
}

module.exports = {
    visit,
    login,
    verifyURL,
    verifyErrorMessage,
    verifySuccessfulLogin
}