"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
function createListener() {
    const readLineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return {
        add: (fn) => readLineInterface.on('line', (line) => fn(line)),
        remove: () => {
            readLineInterface.close();
            process.exit(0);
        },
    };
}
exports.createListener = createListener;
//# sourceMappingURL=nodeInputStreamListener.js.map