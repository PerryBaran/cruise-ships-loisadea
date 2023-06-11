const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");
const Itinerary = require("../src/Itinerary.js");

describe("Port", () => {
  it("creates an object", () => {
    expect(new Port("Southampton")).toBeInstanceOf(Port);
  });

  it("has a name", () => {
    const port = new Port("Southampton");
    expect(port.name).toEqual("Southampton");
  });

  it("has an empty list of ships on instantiation", () => {
    const port = new Port("Southampton");
    expect(port.ships).toEqual([]);
  });

  describe("methods", () => {
    let port;
    let ship;

    beforeEach(() => {
      port = new Port("Southampton");

      // make ship
      const southampton = new Port("Southampton");
      const liverpool = new Port("Liverpool");
      const belfast = new Port("Belfast");
      const itinerary = new Itinerary([southampton, liverpool, belfast]);
      ship = new Ship(itinerary);
    });

    it("can have ships added to it", () => {
      port.addShip(ship);
      expect(port.ships).toEqual([ship]);
    });

    it("can have ships removed from it", () => {
      port.addShip(ship);
      port.removeShip(ship);
      expect(port.ships).toEqual([]);
    });
  });
});
