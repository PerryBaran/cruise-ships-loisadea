const Port = require("../src/Port.js");

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
      ship = jest.fn();
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
