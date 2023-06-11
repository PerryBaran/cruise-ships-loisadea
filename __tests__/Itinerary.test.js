const Itinerary = require("../src/Itinerary.js");
const Port = require("../src/Port.js");

describe("Itinerary", () => {
  let ports;
  beforeEach(() => {
    const southampton = new Port("Southampton");
    const liverpool = new Port("Liverpool");
    const belfast = new Port("Belfast");
    ports = [southampton, liverpool, belfast];
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
