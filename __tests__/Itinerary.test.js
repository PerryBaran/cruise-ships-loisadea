const Itinerary = require("../src/Itinerary.js");

describe("Itinerary", () => {
  let ports;
  beforeEach(() => {
    ports = [jest.fn(), jest.fn(), jest.fn()];
  });

  describe("constructor", () => {
    it("creates an object", () => {
      const itinerary = new Itinerary(ports);
      expect(itinerary).toBeInstanceOf(Itinerary);
    });

    it("has a list of ports", () => {
      const itinerary = new Itinerary(ports);
      expect(itinerary.ports).toEqual(ports);
    });
  });
});
