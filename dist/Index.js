"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const nodeInputStreamListener_1 = require("./nodeInputStreamListener");
const app = new app_1.App((str) => console.log(str), nodeInputStreamListener_1.createListener(), '>> ');
//# sourceMappingURL=index.js.map