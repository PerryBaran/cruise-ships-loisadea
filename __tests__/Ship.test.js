const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

function makeItineraryForTests() {
  const southampton = new Port("Southampton");
  const liverpool = new Port("Liverpool");
  const belfast = new Port("Belfast");
  return new Itinerary([southampton, liverpool, belfast]);
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

  it("has a current port which is the first port of itinerary", () => {
    const itinerary = makeItineraryForTests();
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toEqual(itinerary.ports[0]);
  });

  it("has a previous port which is initially set to null", () => {
    const itinerary = makeItineraryForTests();
    const ship = new Ship(itinerary);
    expect(ship.previousPort).toBeNull();
  });
});

function makeShipForTests() {
  return new Ship(makeItineraryForTests());
}

describe("setSail", () => {
  it("makes the truthiness of currentPort be false", () => {
    const ship = makeShipForTests();
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });

  it("sets the previousPort to be the starting port the first time", () => {
    const ship = makeShipForTests();
    ship.setSail();
    expect(ship.previousPort).toBe(ship.itinerary.ports[0]);
  });
});

describe("dock", () => {
  it("sets the currentPort to the next port in the itinerary", () => {
    const ship = makeShipForTests();
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toEqual(ship.itinerary.ports[1]);
  });
});
