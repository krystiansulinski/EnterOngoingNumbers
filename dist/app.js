"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fibonacci_1 = require("./fibonacci");
const frequencies_1 = require("./frequencies");
const prompts_1 = require("./prompts");
const timeKeeper_1 = require("./timeKeeper");
class App {
    constructor(printFn, listener, prompt, fibonacciLimit = 1000) {
        this.freq = new frequencies_1.Frequencies();
        this.fib = new fibonacci_1.Fibonacci(fibonacciLimit);
        this.logFunction = printFn;
        this.removeListener = listener.remove;
        prompts_1.setPrompt(prompt);
        this.log(prompts_1.PROMPTS.WELCOME);
        this.listen(listener.add);
    }
    listen(listener) {
        listener((line) => {
            const num = this.getEnteredBigInt(line);
            if (num > 0n) {
                !this.timer ? this.setupFrequencyOutput(Number(num)) : this.addNumbers(num);
            }
            else {
                switch (line) {
                    case prompts_1.COMMANDS.QUIT:
                        this.quit();
                        break;
                    case prompts_1.COMMANDS.HALT:
                        this.halt();
                        break;
                    case prompts_1.COMMANDS.RESUME:
                        this.resume();
                        break;
                    default:
                        if (this.typedQuit) {
                            this.removeListener();
                        }
                }
            }
        });
    }
    getEnteredBigInt(line) {
        let num;
        try {
            num = BigInt(line);
        }
        catch (e) {
            num = BigInt(0);
        }
        return num;
    }
    setupFrequencyOutput(num) {
        this.log(prompts_1.PROMPTS.ENTER_FIRST_NUMBER);
        this.timer = new timeKeeper_1.TimeKeeper(num);
    }
    addNumbers(num) {
        if (!this.timer.isHalted()) {
            if (!this.timer.isTicking()) {
                this.timer.start(() => this.logFunction(this.freq.toString()));
            }
            if (this.fib.has(num)) {
                this.log(prompts_1.PROMPTS.FIBONACCI);
            }
            this.log(prompts_1.PROMPTS.ENTER_NEXT_NUMBER);
            this.freq.add(num);
        }
    }
    quit() {
        if (this.timer) {
            this.timer.halt();
        }
        if (this.freq.size()) {
            this.log(this.freq.toString());
        }
        this.log(prompts_1.PROMPTS.FAREWELL);
        this.typedQuit = true;
    }
    halt() {
        if (this.timer && this.timer.isTicking() && !this.timer.isHalted()) {
            this.timer.halt();
            this.log(prompts_1.PROMPTS.TIMER_HALTED);
        }
    }
    resume() {
        if (this.timer && this.timer.isHalted()) {
            this.timer.resume();
            this.log(prompts_1.PROMPTS.TIMER_RESUMED);
        }
    }
    log(str) {
        this.logFunction((prompts_1.PROMPTS.DEFAULT + str));
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map