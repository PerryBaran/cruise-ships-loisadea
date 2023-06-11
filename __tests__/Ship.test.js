const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship", () => {
  let itinerary;

  beforeEach(() => {
    const southampton = new Port("Southampton");
    const liverpool = new Port("Liverpool");
    const belfast = new Port("Belfast");
    itinerary = new Itinerary([southampton, liverpool, belfast]);
  });

  describe("constructor", () => {
    it("creates an object", () => {
      expect(new Ship(itinerary)).toBeInstanceOf(Ship);
    });

    it("has an itinerary", () => {
      const ship = new Ship(itinerary);
      expect(ship.itinerary).toBe(itinerary);
    });

    it("has a current port which is the first port of the itinerary on instantiation", () => {
      const ship = new Ship(itinerary);
      expect(ship.currentPort).toEqual(itinerary.ports[0]);
    });

    it("has a previous port set to null on instaniation", () => {
      const ship = new Ship(itinerary);
      expect(ship.previousPort).toBeNull();
    });

    it("gets added to port on instantiation", () => {
      const ship = new Ship(itinerary);
      expect(ship.currentPort.ships).toEqual([ship]);
    });
  });

  describe("methods", () => {
    let ship;

    beforeEach(() => {
      ship = new Ship(itinerary);
    });

    it("can set sail", () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(ship.previousPort).toBe(ship.itinerary.ports[0]);
      expect(ship.previousPort.ships).toEqual([]);
    });

    it("can dock at a different port", () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toEqual(ship.itinerary.ports[1]);
      expect(ship.currentPort.ships).toEqual([ship]);
    });
  });
});
