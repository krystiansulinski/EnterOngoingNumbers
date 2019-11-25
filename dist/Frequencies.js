"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Frequencies {
    constructor() {
        this.freq = new Map();
        this.freq = new Map();
    }
    add(value) {
        const bigIntValue = BigInt(value);
        this.freq.set(bigIntValue, (this.freq.get(bigIntValue) || 0) + 1);
        this.regenerateString();
    }
    size() {
        return this.freq.size;
    }
    sort() {
        return new Map([...this.freq.entries()].sort((a, b) => Number(BigInt(b[1]) - BigInt(a[1]))));
    }
    regenerateString() {
        this.string = '';
        this.sort().forEach((frequency, value) => this.string += `${value}:${frequency}, `);
        this.string = this.string.substr(0, this.string.length - 2);
    }
    toString() {
        return this.string;
    }
}
exports.Frequencies = Frequencies;
//# sourceMappingURL=frequencies.js.map