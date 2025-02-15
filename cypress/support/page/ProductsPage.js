class ProductsPage {

    addProduct(nameProduct) {
        cy.contains(nameProduct).should('be.visible').click();
        cy.get('#add-to-cart').should('be.visible').click();
        cy.get('[data-test="back-to-products"]').should('be.visible').click();
    }

    addTwoProducts(products) {
        products.forEach(product => this.addProduct(product));
        cy.log(`Se agrego el producto: ${ products }`);
    }

    cartView() {
        cy.get('.shopping_cart_link').click();
    }

}

export default ProductsPage;