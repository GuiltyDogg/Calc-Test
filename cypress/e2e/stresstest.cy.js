describe("field value stress test", () => {
  it("down payment input value", () => {
    //    tesing negative numbers
    cy.visit("/");
    cy.get("#cdownpayment").clear().type("-15");
    cy.get('input[type="submit"][value="Calculate"]').click();
    cy.get('.crighthalf div[style*="background-image"]').should(
      "contain",
      "Please provide a positive down payment value."
    );
    // tesing decimals
    cy.visit("/");
    cy.get("#cdownpayment").clear().type("15.5");
    cy.get('input[type="submit"][value="Calculate"]').click();
    cy.get("h2.h2result").should("contain", "$2,255.54");
    // tesing high numbers
    cy.visit("/");
    cy.get("#cdownpayment").clear().type("1000");
    cy.get('input[type="submit"][value="Calculate"]').click();
    cy.get('.crighthalf div[style*="background-image"]').should(
      "contain",
      "Please provide a down payment percentage between 0 and 100%"
    );
    // testing special characters
    cy.visit("/");
    cy.get("#cdownpayment").clear().type("15%");
    cy.get('input[type="submit"][value="Calculate"]').click();
    cy.get("h2.h2result").should("contain", "$2,268.88");
    // tesing letters
    cy.visit("/");
    cy.get("#cdownpayment").clear().type("hello world");
    cy.get('input[type="submit"][value="Calculate"]').click();
    cy.get('.crighthalf div[style*="background-image"]').should(
      "contain",
      "Please provide a positive down payment value."
    );
  });
});
