import cesarCipher from "../cesarCipher";

//wrapping from z to a
test("odin cesar ciphered by 15 characters returns dsxc", () => {
  expect(cesarCipher("odin", 15)).toBe("dsxc");
});

//keeping the same case
test("Odin cesar ciphered by 16 characters returns Etyd", () => {
  expect(cesarCipher("Odin", 16)).toBe("Etyd");
});

//punctuation
test("The Odin Project. cesar ciphered by 6 characters returns Znk Ujot Vxupkiz.", () => {
  expect(cesarCipher("The Odin Project.", 6)).toBe("Znk Ujot Vxupkiz.");
});
