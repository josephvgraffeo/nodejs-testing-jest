import { calculateSalesTax, factorial } from "./index.js";

test("$10 should be $0.70 tax", () => {
    expect(calculateSalesTax(10, 0.07)).toBe(.7);
})

test("$15 should be $1.05 tax", () => {
    expect(calculateSalesTax(15, 0.07)).toBe(1.05);
})

test("$17.50 should be $1.23 tax", () => {
    expect(calculateSalesTax(17.5, 0.07)).toBe(1.23);
})

test("3! should be 6", () => {
    expect(factorial(3)).toBe(6);
})

test("5! should be 120", () => {
    expect(factorial(5)).toBe(120);
})

test("6! should be 720", () => {
    expect(factorial(6)).toBe(720);
})