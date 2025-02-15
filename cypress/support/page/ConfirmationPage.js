class ConfirmationPage {

    verifyMessageSuccess() {
        cy.contains('Thank you for your order!').should('be.visible')
        cy.log('Se visualiza la confimacion con exito');
    }
}

export default ConfirmationPage;