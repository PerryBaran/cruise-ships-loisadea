/* globals describe it expect */
const Ship = require("../src/Ship.js");

describe("Ship", () => {
  it("creates an object", () => {
    expect(new Ship("Southampton")).toBeInstanceOf(Ship);
  });

  it("has a starting port", () => {
    const ship = new Ship("Southampton");
    expect(ship.startingPort).toEqual("Southampton");
  });
});

describe("setSail", () => {
  it("makes the truthiness of startingPort be false", () => {
    const ship = new Ship("Southampton");
    expect(ship.startingPort).toEqual("Southampton");
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
});
