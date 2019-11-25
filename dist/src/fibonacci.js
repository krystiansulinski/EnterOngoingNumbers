"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fibonacci {
    constructor(limit) {
        if (limit > -1) {
            this.calculate(limit);
        }
    }
    has(num) {
        return this.numbers.has(BigInt(num));
    }
    calculate(limit) {
        this.numbers = new Set();
        let previous = 0n;
        let current = 1n;
        let newLimit = limit;
        if (newLimit > 2) {
            newLimit = newLimit - 1;
        }
        for (let i = 0n; this.numbers.size < newLimit; i = i + 1n) {
            this.numbers.add(previous);
            const tmp = previous;
            previous = current;
            current = tmp + current;
        }
    }
}
exports.Fibonacci = Fibonacci;
//# sourceMappingURL=fibonacci.js.map