///<reference types="Cypress"/>
const loginpage = require('../pages/login-page')

describe("Verify login functionality of Facebook", function () {
    beforeEach("Verify if url of AUT is working", function () {
        loginpage.visit(Cypress.env('landingURL'))
        cy.fixture('login-spec-test-data').then(function (data) {
            this.journeyData = data
        })
    })

    it("Verify HappyPath if user is able to login with correct emailid & password", function () {
        loginpage.login(this.journeyData.correctEmail, this.journeyData.correctPassword)
        loginpage.verifySuccessfulLogin(this.journeyData.correctEmail)
        loginpage.verifyURL(Cypress.env('productionURL'))
    })
})
