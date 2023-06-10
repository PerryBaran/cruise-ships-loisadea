const Port = require("../src/Port.js");

describe("Port", () => {
  it("creates an object", () => {
    expect(new Port("Southampton")).toBeInstanceOf(Port);
  });

  it("has a name", () => {
    const port = new Port("Southampton");
    expect(port.name).toEqual("Southampton");
  });
});
