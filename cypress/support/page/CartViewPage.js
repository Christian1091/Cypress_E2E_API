class CartViewPage {

    checkout() {
        cy.get('#checkout').click();
        cy.log('Visualizar el carrito');
    }
}

export default CartViewPage;