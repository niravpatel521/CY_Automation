class PageOne{
    constructor(){
        cy.log('constructor: PageOne')
    }

    static methodFromPageOne(){
        cy.log(' Page One Method')
    }

}
export default PageOne