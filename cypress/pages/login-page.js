///<reference types="Cypress"/>
const actions = require('../page-helper/actions')

const locators = {
    email: "id:email",
    password: "id:pass",
    loginBtn: "css:[data-testid='royal_login_button']",
    loginBtn2: "id:loginbutton",
    invaidEmailErrMsg: "text:The email address or mobile number you entered isn't connected to an account.",
    successLogin: "css:[aria-label='Create a post']"
}

function visit(url) {
    cy.visit(url)
    actions.log('Opened url = ' + url)
}

function login(emailId, passwordText) {
    actions.click(locators.loginBtn)
    actions.waitForDOMLoad(locators.email, 'type', emailId)
    actions.enterText(locators.password, passwordText)
    actions.click(locators.loginBtn2)
    actions.log('Logged In with user emailId & password combination ' + emailId + "  " + passwordText)
}

function verifyURL(expectedURL) {
    cy.url().then(function (url) {
        expect(url).to.contain(expectedURL.toString())
    })
    actions.log('Redirection is happening correct to production URL')
}

function verifySuccessfulLogin(emailId) {
    actions.getWebElement(locators.successLogin).should('be.visible')
    actions.log('Login Success for the user ' + emailId)
}

function verifyErrorMessage(emailId) {
    actions.getWebElement(locators.invaidEmailErrMsg).should('be.visible')
    actions.log('The error message for incorrect emailid is visible ' + emailId)
}

module.exports = {
    visit,
    login,
    verifyURL,
    verifyErrorMessage,
    verifySuccessfulLogin
}