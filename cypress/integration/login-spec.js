///<reference types="Cypress"/>
const loginpage = require('../pages/login-page')

describe("Verify login functionality of Facebook", function () {
    beforeEach("Verify if url of AUT is working", function () {
        loginpage.visit(Cypress.env('landingURL'))
        loginpage.verifyURL(Cypress.env('productionURL'))
        cy.fixture('login-spec-test-data').then(function (data) {
            this.journeyData = data
        })
    })

    it("Verify HappyPath if user is able to login with correct emailid & password", function () {
        loginpage.login(this.journeyData.correctEmail, this.journeyData.correctEmail)
        loginpage.verifySuccessfulLogin(this.journeyData.correctEmail)
    })


    it("Verify NegativeFlow user should not be able to login with incorrect emailid & password", function () {
        loginpage.login(this.journeyData.incorrectEmail, this.journeyData.incorrectEmail)
        loginpage.verifyErrorMessage(this.journeyData.incorrectEmail)
    })
})
