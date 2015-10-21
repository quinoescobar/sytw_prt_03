var expect = chai.expect;

describe("Temperatura-Sinon", function() {
  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe("constructor", function() {
    it("should have a default name", function() {
      var cow = new Cow();
      expect(cow.name).to.equal("Anon cow");
    });

    it("should set cow's name if provided", function() {
      var cow = new Cow("Kate");
      expect(cow.name).to.equal("Kate");
    });
  });

  describe("#greets", function() {
    it("should log on error if no target is passed in", function() {
      (new Cow()).greets();

      sinon.assert.notCalled(console.log);
      sinon.assert.calledOnce(console.error);
      sinon.assert.calledWithExactly(console.error, "missing target");
    });

    it("should log passed target", function() {
      var greetings = (new Cow("Kate")).greets("Baby");

      sinon.assert.calledWithExactly(console.log, "Kate greets Baby!");
    });
  });
});
