"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexcontrollers_1 = require("../controllers/indexcontrollers");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexcontrollers_1.indexcontrollers.index);
    }
}
const indexroutes = new IndexRoutes();
exports.default = indexroutes.router;
