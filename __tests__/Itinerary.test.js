const Itinerary = require("../src/Itinerary.js");
const Port = require("../src/Port.js");

describe("Itinerary", () => {
  it("creates an object", () => {
    const southampton = new Port("Southampton");
    const liverpool = new Port("Liverpool");
    const belfast = new Port("Belfast");
    const itinerary = new Itinerary([southampton, liverpool, belfast]);
    expect(itinerary).toBeInstanceOf(Itinerary);
  });

  it("has a list of ports", () => {
    const southampton = new Port("Southampton");
    const liverpool = new Port("Liverpool");
    const belfast = new Port("Belfast");
    const itinerary = new Itinerary([southampton, liverpool, belfast]);
    expect(itinerary.ports).toEqual([southampton, liverpool, belfast]);
  });
});
