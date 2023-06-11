const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

function makeItineraryForTests() {
  const southampton = new Port("Southampton");
  const liverpool = new Port("Liverpool");
  const belfast = new Port("Belfast");
  return new Itinerary([southampton, liverpool, belfast]);
}

function makeShipForTests() {
  return new Ship(makeItineraryForTests());
}

describe("Ship", () => {
  it("creates an object", () => {
    const itinerary = makeItineraryForTests();
    expect(new Ship(itinerary)).toBeInstanceOf(Ship);
  });

  it("has an itinerary", () => {
    const itinerary = makeItineraryForTests();
    const ship = new Ship(itinerary);
    expect(ship.itinerary).toBe(itinerary);
  });

  it("has a current port which is the first port of the itinerary on instantiation", () => {
    const itinerary = makeItineraryForTests();
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toEqual(itinerary.ports[0]);
  });

  it("has a previous port set to null on instaniation", () => {
    const itinerary = makeItineraryForTests();
    const ship = new Ship(itinerary);
    expect(ship.previousPort).toBeNull();
  });

  it("gets added to port on instantiation", () => {
    const itinerary = makeItineraryForTests();
    const ship = new Ship(itinerary);
    expect(ship.currentPort.ships).toEqual([ship]);
  });

  it("can set sail", () => {
    const ship = makeShipForTests();
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(ship.itinerary.ports[0]);
    expect(ship.previousPort.ships).toEqual([]);
  });

  it("can dock at a different port", () => {
    const ship = makeShipForTests();
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toEqual(ship.itinerary.ports[1]);
    expect(ship.currentPort.ships).toEqual([ship]);
  });
});
