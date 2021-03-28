import somar from "./index.js";

describe("index.js", () => {
  it("should add 3 and 2 returning 5", () => {
    expect(somar(3, 2)).toBe(5);
  });
});
