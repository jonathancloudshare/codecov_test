const lib = require("./index");
const foo = require("./foo");

describe("codecov_test", () => {
    it("sayHello", () => {
        expect(lib.sayHello("Jonathan")).toEqual("hi Jonathan");
    });

    it("sayHelloIfEvent", () => {
        expect(lib.sayHelloIfEven("Jonathan", 1)).not.toEqual("hi Jonathan");
        expect(lib.sayHelloIfEven("Jonathan", 2)).toEqual("hi Jonathan");
    });

    it("fooThis()", () => {
        expect(foo.fooThis(5, 5)).toEqual(10);
    });
});