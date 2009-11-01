load("examples/src/greeter.js");

Screw.Unit(function() {
    describe('Greeter', function() {
        describe('#greet', function() {
            it("should greet the given name", function() {
                expect(blueridgeExample.greeter().greet("Ryan")).to(equal, "Hello Ryan");
            });
        });
    });
});