"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Equipos {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Equipos'));
    }
}
const equipos = new Equipos();
exports.default = equipos.router;
