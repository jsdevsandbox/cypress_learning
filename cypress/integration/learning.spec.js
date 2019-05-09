describe("--- cypress test suite ---", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("should successfully load google's website ", () => {
    cy.visit("https://www.google.com/");
    cy.get("#hplogo")
      .should("have.length", 1)
      .should("be.visible");
  });

  it("should search amazon for echodot ", () => {
    cy.visit("https://www.amazon.ca/");
    cy.get("#twotabsearchtextbox").type("echo dot");
    cy.get(".nav-search-submit > .nav-input").click();
    cy.get(
      ".sg-col-14-of-20 > .sg-col-inner > .a-section > :nth-child(1)"
    ).should("contain", "results");
  });

  it("should find button and check classes ", () => {
    cy.visit("https://www.rivaltech.com//");
    cy.get("#cta_button_4993913_fae0651b-791a-4ac4-ae21-046297d01e7f")
      .should("have.class", "cta_button")
      .should("not.have.class", "blah")
      .should("be.visible")
      .should("not.contain", "blah")
      .should("contain", "REQUEST A DEMO");
  });
});
