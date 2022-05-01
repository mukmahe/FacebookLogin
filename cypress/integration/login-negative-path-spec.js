///<reference types="Cypress"/>
const loginpage = require('../pages/login-page')

describe("Verify login functionality of Facebook", function () {
    beforeEach("Verify if url of AUT is working", function () {
        loginpage.visit(Cypress.env('landingURL'))
        cy.fixture('login-spec-test-data').then(function (data) {
            this.journeyData = data
        })
    })

    it("Verify NegativeFlow user should get error message if login with incorrect emailid", function () {
        loginpage.login(this.journeyData.incorrectEmail, this.journeyData.incorrectPassword)
        loginpage.verifyErrorMessage(this.journeyData.incorrectEmail)
    })
})
