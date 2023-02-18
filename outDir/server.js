"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const axios_1 = __importDefault(require("axios"));
const backendIp = process.env.BACKEND_IP || 'localhost';
const backendPort = process.env.BACKEND_PORT || '5000';
const frontendIp = process.env.FRONTEND_IP || 'localhost';
const frontendPort = process.env.FRONTEND_PORT || '1337';
const backendConnection = `http://${backendIp}:${backendPort}`;
const frontendConnection = `http://${frontendIp}:${frontendPort}`;
const app = (0, express_1.default)();
app.get('/main', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.sendFile(path_1.default.join(__dirname, './index.html'));
}));
app.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.json('hello world');
}));
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${backendConnection}/user`);
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    });
}
app.listen(frontendPort, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Listening on ${frontendConnection}`);
}));
//# sourceMappingURL=server.js.map