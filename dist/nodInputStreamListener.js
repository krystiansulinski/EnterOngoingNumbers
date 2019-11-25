"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
function createistener() {
    const readLineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return {
        add: (fn) => readLineInterface.on("line", (line) => fn(line)),
        remove: () => {
            readLineInterface.close();
            process.exit(0);
        },
    };
}
exports.createistener = createistener;
//# sourceMappingURL=nodInputStreamListener.js.map