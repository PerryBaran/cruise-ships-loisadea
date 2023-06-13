const Itinerary = require("../src/Itinerary.js");

describe("Itinerary", () => {
  let southampton;
  let liverpool;
  let belfast;

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
  });

  describe("constructor", () => {
    it("creates an object", () => {
      const itinerary = new Itinerary([southampton, liverpool, belfast]);
      expect(itinerary).toBeInstanceOf(Itinerary);
    });

    it("has a list of ports", () => {
      const itinerary = new Itinerary([southampton, liverpool, belfast]);
      expect(itinerary.ports).toEqual([southampton, liverpool, belfast]);
    });
  });
});
