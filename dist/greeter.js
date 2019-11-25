"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let numbers = new Map();
console.log("Please input the number of time in seconds between emitting numbers and their frequency");
let interval = null;
let frequencies = "";
let added = false;
read.on('line', (line) => {
    const num = Number.parseFloat(line);
    if (interval === null) {
        console.log(">> Please enter the first number");
        read.clearLine(0);
        interval = setInterval(prompt, num * 1000);
    }
    else {
        console.log(">> Please enter the next number");
        if (num) {
            const count = numbers.get(num) || 0;
            numbers.set(num, count + 1);
            added = true;
        }
    }
});
function prompt() {
    if (added) {
        numbers.forEach((value, key) => {
            frequencies += key + ":" + value + ", ";
        });
        frequencies = frequencies.substr(0, frequencies.length - 2);
        added = false;
    }
    console.log(frequencies);
}
//# sourceMappingURL=greeter.js.map