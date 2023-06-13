const Ship = require("../src/Ship.js");

describe("Ship", () => {
  let southampton;
  let liverpool;
  let belfast;
  let itinerary;

  beforeEach(() => {
    southampton = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Southampton",
      ships: [],
    };
    liverpool = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Liverpools",
      ships: [],
    };
    belfast = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Belfast",
      ships: [],
    };
    itinerary = {
      ports: [southampton, liverpool, belfast],
    };
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
      expect(ship.currentPort).toBe(southampton);
    });

    it("has a previous port set to null on instaniation", () => {
      const ship = new Ship(itinerary);
      expect(ship.previousPort).toBeNull();
    });

    it("gets added to port on instantiation", () => {
      const ship = new Ship(itinerary);
      expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
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
      expect(ship.previousPort).toBe(southampton);
      expect(ship.previousPort.removeShip).toHaveBeenCalledWith(ship);
    });

    it("can dock at a different port", () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(liverpool);
      expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
    });
  });
});
