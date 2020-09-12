"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexcontrollers = void 0;
class IndexControllers {
    index(req, res) {
        res.send('INDEX');
    }
}
exports.indexcontrollers = new IndexControllers();
