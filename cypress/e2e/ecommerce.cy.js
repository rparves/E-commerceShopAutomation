import "cypress-real-events/support";

describe('Ecommerce shop public shopfront automation testing spec', () => {
    beforeEach(() => {
        cy.visit('https://shop.tetonelectronics.com/')
    })

    //While writing e2e tests, I encountered some unhandled exception,
    // so this function intercept the exception and continue the test execution
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    //TODO: As this is a exercise, I am not using environment variable to store the email and password.
    // Which can be used in CI/CD pipeline to make them configurable
    const email = 'rubelparves001@gmail.com';
    const password = '123456';

       it('Registration', {scrollBehavior: false}, () => {
       const email = 'r.parves+' + Date.now() + '@gmail.com'

       cy.get('.auth-link').click()
       cy.get('.form-footer.text-center p:nth-child(2) a').click()
       cy.get('#name').should('exist').type('Rubel Parves')
       cy.get('.auth-form div:nth-child(3) div input').should('exist').type(email)
       cy.get('#mobile').should('exist').type((Math.floor(Date.now() / 100)).toString())
       cy.get('#password').should('exist').type('123456')
       cy.get('.btn').should('exist').click()
     });

    it('Login and buying a product', {scrollBehavior: false}, () => {
        cy.get('.auth-link').click()
        cy.get('#name').should('exist').type(email)
        cy.get('#password').should('exist').type(password)
        cy.get('.btn').should('exist').click()
        cy.get('.navbar-wrap.main-menu.d-none.d-lg-flex ul li:nth-child(3) a').click()
        cy.get('.row.mt-2 > div:nth-child(1) .features-product-content h5 a:nth-child(1)').click({force: true})
        cy.get('#addToCart').should('exist').click()
        cy.get('.checkout-link a').should('exist').click({force: true})
        cy.get('.btn').should('exist').click()
        cy.get('#homeDeliveryRadio').check({force: true})

        //TODO: I have disabled this button click as this website seems like a production site
        // cy.get('#placeOrderBtn').click();
    });

    it('Logout', {scrollBehavior: false}, () => {
        cy.get('.auth-link').click()
        cy.get('#name').should('exist').type(email)
        cy.get('#password').should('exist').type(password)
        cy.get('.btn').should('exist').click()
        cy.get('.header-profile').realHover(undefined);
        cy.get('.header-profile li:nth-child(4) a').click()
    });
})

