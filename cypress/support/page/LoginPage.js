class LoginPage {


    visit() {
        cy.visit('/');
    }

    login(username, password) {
        cy.get('#user-name').type(username);
        cy.get('#password').type(password);
        cy.get('#login-button').click();

        cy.log(`Autenticarse con el usuario: standard_user y password: secret_sauce => ${username,password}`);
    }

    loginSuccess() {
        cy.url().should('include', '/inventory.html');
    }

}

export default LoginPage;