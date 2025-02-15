import CartViewPage from "../support/page/CartViewPage";
import LoginPage from "../support/page/LoginPage";
import ProductsPage from "../support/page/ProductsPage";
import CheckoutPage from "../support/page/CheckoutPage";
import ConfirmationPage from "../support/page/ConfirmationPage";

describe('Realizar una prueba funcional automatizada (Prueba E2E) de un flujo de compra', () => {

    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const cartViewPage = new CartViewPage();
    const checkoutPage = new CheckoutPage();
    const confirmationPage = new ConfirmationPage();

    before(' Autenticarse con el usuario: standard_user y password: secret_sauce', () => {
        loginPage.visit();
        loginPage.login('standard_user', 'secret_sauce');
        loginPage.loginSuccess();
    })

    it('Flujo de compras', () => {
        productsPage.addTwoProducts(['Bike Light', 'Fleece Jacket']);
        productsPage.cartView();

        cartViewPage.checkout();

        checkoutPage.informationForm('Juan', 'Perez', '0028');
        checkoutPage.finish();

        confirmationPage.verifyMessageSuccess();
    })

    /*it('Visualizar en el carrito', () => {
        cartViewPage.checkout();

    })*/

});