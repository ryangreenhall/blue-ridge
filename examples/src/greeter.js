var blueridgeExample = {};

blueridgeExample.greeter = function() {
    var that = {};
    that.greet = function(name) {
        return "Hello " + name;
    };
    return that;
};