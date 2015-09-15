var expect = chai.expect;


describe("Car tests", function () {

  var car = new Car();

  describe("Constructor", function () {

    it("should have zero fuel", function () {
      expect(car.fuel).to.equal(0);
    });

  });

  describe("Driving tests", function () {

    it("should return an error when attempting to drive without fuel", function () {
      expect(car.drive()).to.equal('No fuel in car!')
    });

    it("should set fuel to max when fill is called without argument", function () {
      car.fill();
      expect(car.fuel).to.equal(car.max_fuel)
    });

    it("should set fuel according to driving", function () {
      expect(car.fuel).to.equal(car.max_fuel)
    });

    it("should return an error when attempting to drive more than fuel left in car", function () {
      // test
    });

  });

});
