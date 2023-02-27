/// <reference types= "Cypress" />
import { addBoard } from "../../Pageobject/addBoard";
import { loginPage } from "../../Pageobject/loginPage";

const credentials = {
  validEmail: "vlada.zelenovic@gmail.com",
  validPassword: "Vukan123",
  boardTitle: "Vukanic",
};

describe("add new board", () => {
  before("visit app ", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
  });
});
it("create new board", () => {
  cy.intercept = "POST";
  url: "https://cypress-api.vivifyscrum-stage.com/api/v2/boards";
  cy.visit("/boards");
  addBoard.addBoard(credentials.boardTitle);
});
