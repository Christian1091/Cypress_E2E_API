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

    before(() => {
        cy.fixture("loginData").then((loginData) => {
            //Ingresamos saucedemo
            loginPage.visit();

            //Autenticarse con el usuario
            loginPage.login(loginData.username, loginData.password);
            loginPage.loginSuccess();
        });
    })

    it('Prueba funcional automatizada (Prueba E2E)', () => {

        cy.fixture("data").then((data) => {

            //Agregar dos productos al carrito
            productsPage.addTwoProducts(['Bike Light', 'Fleece Jacket']);
            productsPage.cartView();

            //Visualizar el carrito
            cartViewPage.checkout();

            //Completar el formulario de compra
            checkoutPage.informationForm(data.firstName, data.lastName, data.postalCode);
            checkoutPage.finish();

            //Finalizar la compra hasta la confirmación: “THANK YOU FOR YOUR ORDER”
            confirmationPage.verifyMessageSuccess();
        })
    });
});