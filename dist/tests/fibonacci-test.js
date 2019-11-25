"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fibonacci_1 = require("../src/fibonacci");
const chai_1 = require("chai");
describe('Fibonacci', () => {
    it('should generate first 1000 numbers', () => {
        const fib = new fibonacci_1.Fibonacci(1000);
        fibs.forEach(num => chai_1.expect(fib.has(num)).to.equal(true));
        chai_1.expect(fib.has(fibNr1001)).to.equal(false);
    });
});
const fibs = [0, 1, 2, 3, 5, 8, 13, 21, 34, 26863810024485359386146727202142923967616609318986952340123175997617981700247881689338369654483356564191827856161443356312976673642210350324634850410377680367334151172899169723197082763985615764450078474174626n];
const fibNr1001 = 43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875n;
//# sourceMappingURL=fibonacci-test.js.map