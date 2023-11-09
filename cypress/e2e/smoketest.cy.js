describe("smoke test", () => {
  it("quick run down of an user experience", () => {
    cy.visit("/");
    cy.wait(5000);
    cy.get("#chouseprice").clear().type("500000");
    cy.get("#cdownpayment").clear().type("15");
    cy.get("#cloanterm").clear().type("15");
    cy.get("#cinterestrate").clear().type("8");
    cy.get("#cstartmonth").select("12");
    cy.get("#cstartmonth").should("have.value", "12");
    cy.get("#caddoptional").click({ force: true });
    cy.get("#caddoptional").should("not.be.checked");
    cy.get("#caddoptional").click({ force: true });
    cy.get("#caddoptional").should("be.checked");
    cy.get("#chomeins").clear().type("1950");
    cy.get('select[name="cpmiunit"]').select("p");
    cy.get('select[name="cpmiunit"]').should("have.value", "p");
    cy.get("#cpmi").clear().type("2");
    cy.get("#cmoreoptionlinks").click();
    cy.get("#cmoreoptionlinks").should("be.visible");
    cy.get("#cmoreoptionlinks").click();
    cy.get('input[type="submit"][value="Calculate"]').click();
    cy.get("h2.h2result").should("contain", "$4,061.52");
    cy.wait(5000);
    cy.get('input[type="button"][value="Clear"]').click();
  });
});
