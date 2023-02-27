class LoginPage {
  get pageHeading() {
    return cy.get("h1");
  }
  get emailInput() {
    return cy.get(".el-input__inner").first();
  }
  get passwordInput() {
    return cy.get(".el-input__inner").eq(-2);
  }
  get loginButton() {
    return cy.get("button").first();
  }

  login(email, password) {
    this.emailInput.type(Cypress.env("validEmail"));
    this.passwordInput.type(Cypress.env("validPassword"));
    this.loginButton.click();
  }
}

export const loginPage = new LoginPage();
