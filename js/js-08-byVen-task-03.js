const calculator = {
    a: 0,
    b: 0,
    result: 0,

    read(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        this.result = this.a + this.b;
    },
    mult() {
        this.result = this.a * this.b;
    },
}
calculator.read(3, 5);
calculator.sum();
console.log(calculator.result);
calculator.mult();
console.log(calculator.result);