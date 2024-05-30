const calculator = () => ({
    add: function(a, b) {
        return a + b;
    }
});

console.log(calculator().add(1, 2));
