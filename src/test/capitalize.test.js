import capitalize from "../capitalize";

test("capitalizes odin to Odin", () => {
  expect(capitalize("odin")).toBe("Odin");
});
