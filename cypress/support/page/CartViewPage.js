class CartViewPage {

    /*productCartView() {
        cy.get('[data-test="title"]').should('be.visible');
        cy.contains("Your Cart").should('be.visible');
    }*/

    checkout() {

        cy.get('#checkout').click();
    }

}

export default CartViewPage;