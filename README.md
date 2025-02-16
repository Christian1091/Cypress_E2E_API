# Automatización Cypress E2E - Automatización API

Este repositorio contiene la automatización de pruebas desarrollada como parte del proceso de selección para la vacante de **QA Automation**. 

## Desarrollo
* [Cypress](https://github.com/cypress-io/cypress) versión 14.0.3
* [Node](https://github.com/nodejs/node) versión 18.20.2

## Descripción

El objetivo de este proyecto es realizar una prueba funcional automatizando el flujo de compras de productos en la página de **Saucedemo** y  de la misma manera se realiza pruebas automatizadas para servicios de la página **Demoblaze**, para estos ejercicios se utilizo **Cypress**.

## Funcionalidades

Para el ejercicio del flujo de compras **E2E** 

* Se realiza la autenticación del usuario
* Se agrega dos productos al carrito
* Se visualiza el carrito con los productos
* Se completa el formulario para la compra
* Se finaliza la compra hasta ver la confirmación **“THANK YOU FOR YOUR ORDER”**

Para el ejercicio de la **API** 

* Se crea un nuevo usuario en singup
* Se intenta crear un usuario ya existente
* Se realiza el login con credenciales correctos
* Se realiza el login con credenciales incorrectos

## Ejecutar las pruebas

### **Clonar repositorio**

git clone https://github.com/Christian1091/Cypress_E2E_API.git

* Navegar al directorio del proyecto: **cd Cypress_E2E_API**
* Instalamos las dependencias: **npm install**

## Ejecutar el proyecto

* Para ejecutar todas las pruebas: **npx cypress run --spec cypress/e2e/shopping.cy.js**
* Para ejecutar las pruebas API: **npx cypress run --spec cypress/e2e/apiTest.cy.js**

## Modo gráfico

* Abrir Cypress y escribir: **npx cypress open**

## Esructura del proyecto
**cypress**
* **e2e:** Contiene las pruebas E2E y API
* **fixtures:** Contiene los datos para las pruebas
* **support:** Contiene configuraciones adicionales y los comandos
* **support/pages:** Contiene las clases de la página con la estructura **POM - Page Object Model**
* **support/apiRequests:** Contiene la clase para el singup y login de la API



