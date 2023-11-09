describe("smoke test", () => {
  it("passes", () => {
    cy.visit(
      "https://www.calculator.net/mortgage-calculator.html?chouseprice=400%2C000&cdownpayment=20&cdownpaymentunit=p&cloanterm=30&cinterestrate=7.03&cstartmonth=11&cstartyear=2023&caddoptional=1&cpropertytaxes=1.2&cpropertytaxesunit=p&chomeins=0&chomeinsunit=d&cpmi=0&cpmiunit=d&choa=500&choaunit=d&cothercost=4%2C000&cothercostunit=d&cmop=0&cptinc=7&chiinc=2&choainc=2&cocinc=5&cexma=0&cexmsm=11&cexmsy=2023&cexya=0&cexysm=11&cexysy=2023&cexoa=0&cexosm=11&cexosy=2023&caot=0&xa1=0&xm1=11&xy1=2023&xa2=0&xm2=11&xy2=2023&xa3=0&xm3=11&xy3=2023&xa4=0&xm4=11&xy4=2023&xa5=0&xm5=11&xy5=2023&xa6=0&xm6=11&xy6=2023&xa7=0&xm7=11&xy7=2023&xa8=0&xm8=11&xy8=2023&xa9=0&xm9=11&xy9=2023&xa10=0&xm10=11&xy10=2023&printit=0&x=Calculate"
    );
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
