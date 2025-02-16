class ProductsPage {

    produSuccess() {
        cy.url().should('include', '/inventory.html');
    }

    addProduct(nameProduct) {
        cy.contains(nameProduct).should('be.visible').click();
        cy.get('#add-to-cart').should('be.visible').click();
        cy.get('[data-test="back-to-products"]').should('be.visible').click();
    }

    addTwoProducts(products) {
        products.forEach(product => this.addProduct(product));
        cy.log(`Agregar dos productos al carrito: ${ products }`);
    }

    cartView() {
        cy.get('.shopping_cart_link').click();
    }

}

export default ProductsPage;