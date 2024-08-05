"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.table(["zeeshan starting TYPESCRIPT PROJECT"])
console.table("its working fine now----");
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./Services/userService/userRoute"));
console.log("connection", typeof userRoute_1.default);
console.log("connection", userRoute_1.default);
const app = (0, express_1.default)();
const PORT = 8080;
const Hostname = 'localhost';
app.use(express_1.default.json());
app.use('/userService', userRoute_1.default);
app.listen(PORT, () => {
    console.table([`listening on ${Hostname}: ${PORT}`]);
});
