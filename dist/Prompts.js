"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROMPTS = {
    DEFAULT: '',
    ENTER_FIRST_NUMBER: 'Please enter the first number',
    ENTER_NEXT_NUMBER: 'Please enter the next number',
    FAREWELL: 'Thanks for playing, press any key to exit.',
    FIBONACCI: 'FIB',
    TIMER_HALTED: 'timer halted',
    TIMER_RESUMED: 'timer resumed',
    WELCOME: 'Please input the number of time in seconds between emitting numbers and their frequency',
};
exports.COMMANDS = {
    HALT: 'halt',
    QUIT: 'quit',
    RESUME: 'resume',
};
function setPrompt(str) {
    exports.PROMPTS.DEFAULT = str;
}
exports.setPrompt = setPrompt;
//# sourceMappingURL=prompts.js.map