class AddBoard {
  get myOrganization() {
    return cy.get("a[href='/organizations/26618/boards']");
  }
  get addNewBoard() {
    return cy.get(".vs-c-organization-boards__item--add-new");
  }
  get boardTitleInput() {
    return cy.get(".text");
  }

  get nextButton() {
    return cy.get("button").eq(2);
  }
  get boardType() {
    return cy.get("el-form-item").eq(2);
  }
  get nextButton() {
    return cy.get("button").eq(3);
  }
  get nextButton() {
    return cy.get("button").eq(3);
  }
  get nextButton() {
    return cy.get("button").eq(2);
  }
  addBoard(addNewBoard) {
    this.addNewBoard.click();
    this.boardTitleInput.type(Cypress.env("boardTitle"));
    this.nextButton.click();
    this.boardType.click();
    this.nextButton.click();
    this.nextButton.click();
    this.nextButton.click();
  }
}
export const addBoard = new AddBoard();
