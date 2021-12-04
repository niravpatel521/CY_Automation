class HomePage {

    constructor() {
    }

    verifyLogoOnHomePage() {
        cy.get('#header_logo a img').should('be.visible')
    }

}

export default HomePage
