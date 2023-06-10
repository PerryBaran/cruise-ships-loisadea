const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");

describe("Ship", () => {
  it("creates an object", () => {
    const southampton = new Port("Southampton");
    expect(new Ship(southampton)).toBeInstanceOf(Ship);
  });

  it("has a starting port", () => {
    const southampton = new Port("Southampton");
    const ship = new Ship(southampton);
    expect(ship.startingPort).toEqual(southampton);
  });

  it("has a current port", () => {
    const southampton = new Port("Southampton");
    const ship = new Ship(southampton);
    expect(ship.currentPort).toEqual(southampton);
  });
});

describe("setSail", () => {
  it("makes the truthiness of startingPort be false", () => {
    const southampton = new Port("Southampton");
    const ship = new Ship(southampton);
    expect(ship.startingPort).toEqual(southampton);
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
});

describe("dockTo", () => {
  it("sets the currentPort to the port the ship has docked to", () => {
    const southampton = new Port("Southampton");
    const ship = new Ship(southampton);
    ship.setSail();
    const liverpool = new Port("Liverpool");
    ship.dockTo(liverpool);
    expect(ship.currentPort).toEqual(liverpool);
  });
});
