describe("field value stress test", () => {
  beforeEach(() => {
    cy.visit("https://www.calculator.net/mortgage-calculator.html");

    it("passes", () => {
      cy.wait(5000);
      cy.get("#chouseprice").clear().type("500000");
    });
  });
});
