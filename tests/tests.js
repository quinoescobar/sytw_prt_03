var expect = chai.expect;

describe("Testing con BDD", function() {

  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });

  describe("Temperatura", function() {
    it("Deberia poder crearse un objeto Temperatura", function() {
      var paraCalcular = new Temperatura();
      // var should = require('chai.js').should();
      expect(paraCalcular).to.be.an('object');
    });
    it("Deberia tener un campo valor", function() {
      var paraCalcular = new Temperatura();
      paraCalcular.setValor(123456789);
      paraCalcular.setTipo("Faren");
      expect(paraCalcular.getValor()).to.equal(123456789);
    });

    it("Deberia tener un campo tipo", function() {
      var paraCalcular = new Temperatura();
      paraCalcular.setValor(123456789);
      paraCalcular.setTipo("Farenheit");
      expect(paraCalcular.getTipo()).to.equal("Farenheit");
    });
  });

  describe("#Calculando:Converting", function() {
    it("Deberia sacar error al introducir 43X", function() {
      window.onload = function() {
        original.value = "43X";
        calcularW();
        expect(converted.innerHTML).to.equal("¡ERROR! Intente con valores correctos [-,+] [Número] [Medida] e.g: '-4.2C' ");
      };
});

    it("Deberia poder convertir Celsius a Farenheit", function() {
      window.onload = function() {
      var calculado = new Temperatura();
      original.value = "0C";
      var resultado =calculado.Celsius();
      expect(resultado).to.equal("32.0 Farenheit");
      };
    });
    it("Deberia poder convertir Farenheit a Celsius", function() {
      window.onload = function() {
      var calculado = new Temperatura();
      original.value = "43F";
      var resultado =calculado.Farenheit();
      expect(resultado).to.equal("6.1 Celsius");
      };
    });
    // it("Deberia poder llamar al metodo calcular", function() {
    //   var calculado = new Temperatura();
    //   calculado.setValor(43);
    //   calculado.setTipo("F");
    //   var resultado =calculado.Farenheit();
    //   expect(resultado).to.equal("6.1 Celsius");
    // });
  });

});
