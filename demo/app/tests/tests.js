var Bugsee = require("nativescript-bugsee").Bugsee;
var bugsee = new Bugsee();

describe("greet function", function() {
    it("exists", function() {
        expect(bugsee.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(bugsee.greet()).toEqual("Hello, NS");
    });
});