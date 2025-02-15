class CheckoutPage {
    informationForm(firstName, lastName, postalCode) {

        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#postal-code').type(postalCode);
        cy.get('#continue').click();
    }

    finish() {
        cy.get('#finish').click();
    }
}

export default CheckoutPage;