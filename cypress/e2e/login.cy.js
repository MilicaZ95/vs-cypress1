/// <reference types= "Cypress" />

import { loginPage } from "../../Pageobject/loginPage";

const credentials = {
  validEmail: "vlada.zelenovic@gmail.com",
  validPassword: "Vukan123",
};

describe("login test", () => {
  before("visit app ", () => {
    cy.visit("/");
    cy.url().should("include", "/login");

    loginPage.pageHeading
      .should("be.visible")
      .and("have.text", "Log in with your existing account");
  });

  it("login with valid credentials", () => {
    cy.intercept({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
    }).as("successfulLogin");

    loginPage.login(credentials.validEmail, credentials.validPassword);
    cy.wait("@successfulLogin").then((interception) => {
      expect(interception.response.statusCode).eq(200);
    });
    cy.url().should("not.include", "/login");
  });
});
