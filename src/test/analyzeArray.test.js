import analyzeArray from "../analyzeArray";

test("analyzes [1,8,3,4,2,6] to return an avg of 4, min of 1, max of 8, and lenght of 6", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
