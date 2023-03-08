import { sayHello } from "./utilities.js"

test("Say hello Joe", () => {
    expect(sayHello("Joe")).toBe("Hello Joe")
})

test("Say hello 44", () => {
    expect(sayHello(44)).toBe("Hello 44")
})

test("Say hello ___", () => {
    expect(sayHello()).toBe("Hello undefined")
})