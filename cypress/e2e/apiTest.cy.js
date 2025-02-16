import AuthRequest from "../support/apiRequests/AuthRequest";
import usersApi from "../fixtures/usersApi.json"

describe('Se realiza pruebas de servicios para singup y login ', () => {

    const authRequest = new AuthRequest();

    it('Crear un nuevo usuario en signup', () => {
        authRequest.singUp(usersApi.newUser.username, usersApi.newUser.password).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(`Crea un nuevo usuario con singup => Respuesta: ${JSON.stringify(response.body)}`);
        });
    });

    it('Intentar crear un usuario ya existente', () => {
        authRequest.singUp(usersApi.userExisting.username, usersApi.userExisting.password).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("errorMessage", "This user already exist.");
            cy.log(`Intentar crear un usuario ya existente => Respuesta: ${JSON.stringify(response.body)}`);
        });
    });

    it('Usuario y password correcto en login', () => {
        authRequest.login(usersApi.newUser.username, usersApi.newUser.password).then((response) => {
            expect(response.status).to.eq(200);
            /*expect(response.body).to.have.property("Auth_token: SnVhbml0b0UxNzQwMjU1");*/
            cy.log(`Usuario y password correcto en login => Respuesta: ${JSON.stringify(response.body)}`);
        });

    });

    it('Usuario y password incorrecto en login', () => {
        authRequest.login(usersApi.userIncorrect.username, usersApi.userIncorrect.password).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("errorMessage", "Wrong password.");
            cy.log(`Usuario y password incorrecto en login => Respuesta: ${JSON.stringify(response.body)}`);

        });
    });

})