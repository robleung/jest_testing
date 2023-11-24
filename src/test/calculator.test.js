import calculator from "../calculator";

test("adds 3 and 5 to equal 8", () => {
  expect(calculator.add(3, 5)).toBe(8);
});

test("subtracts 6 from 2 to equal 4", () => {
  expect(calculator.sub(6, 2)).toBe(4);
});

test("multiplies 14 and 5534 to equal 77476", () => {
  expect(calculator.mul(14, 5534)).toBe(77476);
});

test("divides 5 by 0.2 to equal 25", () => {
  expect(calculator.div(5, 0.2)).toBe(25);
});
