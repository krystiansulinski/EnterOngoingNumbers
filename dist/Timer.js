"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Timer {
    constructor(delay, callback) {
        this.started = 0;
        this.paused = false;
        this.remaining = Number(delay) * 1000;
        this.callback = callback;
        this.resume();
    }
    pause() {
        if (!this.paused) {
            this.paused = true;
            clearInterval(this.interval);
            const elapsed = Date.now() - this.started;
            this.remaining = this.remaining - elapsed;
        }
    }
    start() {
        this.resume();
    }
    stop() {
        clearInterval(this.interval);
    }
    resume() {
        if (this.started === 0 || this.paused) {
            this.paused = false;
            this.started = Date.now();
            this.interval = setInterval(this.callback, this.remaining);
        }
    }
}
exports.Timer = Timer;
//# sourceMappingURL=Timer.js.map