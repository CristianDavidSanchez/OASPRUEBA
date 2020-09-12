"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipocontrollers_1 = require("../controllers/equipocontrollers");
class Equipos {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', equipocontrollers_1.equipocontrollers.list);
        this.router.get('/:id', equipocontrollers_1.equipocontrollers.getone);
        this.router.post('/', equipocontrollers_1.equipocontrollers.create);
        this.router.put('/:id', equipocontrollers_1.equipocontrollers.update);
        this.router.delete('/:id', equipocontrollers_1.equipocontrollers.delete);
    }
}
const equipos = new Equipos();
exports.default = equipos.router;
