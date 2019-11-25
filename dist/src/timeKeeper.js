"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimeKeeper {
    constructor(delay) {
        this.remaining = delay * 1000;
    }
    start(callback) {
        this.started = 0;
        this.halted = false;
        this.callback = callback;
        this.resume();
    }
    halt() {
        if (this.isTicking()) {
            this.halted = true;
            clearInterval(this.interval);
        }
    }
    resume() {
        if (this.isHalted() || this.started === 0) {
            this.halted = false;
            this.started = Date.now();
            this.interval = setInterval(this.callback, this.remaining);
        }
    }
    getFrequency() {
        return this.remaining;
    }
    isTicking() {
        return this.interval !== undefined;
    }
    isHalted() {
        return this.halted;
    }
}
exports.TimeKeeper = TimeKeeper;
//# sourceMappingURL=timeKeeper.js.map