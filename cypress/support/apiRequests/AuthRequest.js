class AuthRequest {

    singUp(username, password) {
        return cy.request({
            method: "POST",
            url: "/signup",
            body: { username, password },
            statusCode: false
        });
    }

    login(username, password) {
        return cy.request({
            method: "POST",
            url: "/login",
            body: { username, password },
            statusCode: false
        });
    }

}

export default AuthRequest;