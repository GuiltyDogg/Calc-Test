describe("field value stress test", () => {
  beforeEach(() => {
    cy.visit(
      "https://www.calculator.net/mortgage-calculator.html?chouseprice=400%2C000&cdownpayment=20&cdownpaymentunit=p&cloanterm=30&cinterestrate=7.03&cstartmonth=11&cstartyear=2023&caddoptional=1&cpropertytaxes=1.2&cpropertytaxesunit=p&chomeins=0&chomeinsunit=d&cpmi=0&cpmiunit=d&choa=500&choaunit=d&cothercost=4%2C000&cothercostunit=d&cmop=0&cptinc=7&chiinc=2&choainc=2&cocinc=5&cexma=0&cexmsm=11&cexmsy=2023&cexya=0&cexysm=11&cexysy=2023&cexoa=0&cexosm=11&cexosy=2023&caot=0&xa1=0&xm1=11&xy1=2023&xa2=0&xm2=11&xy2=2023&xa3=0&xm3=11&xy3=2023&xa4=0&xm4=11&xy4=2023&xa5=0&xm5=11&xy5=2023&xa6=0&xm6=11&xy6=2023&xa7=0&xm7=11&xy7=2023&xa8=0&xm8=11&xy8=2023&xa9=0&xm9=11&xy9=2023&xa10=0&xm10=11&xy10=2023&printit=0&x=Calculate"
    );

    it("passes", () => {
      cy.wait(5000);
      cy.get("#chouseprice").clear().type("500000");
    });
  });
});
