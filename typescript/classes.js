"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = require("./module");
var point = new module_1.Point(0, 0);
point.draw();
point.X = -10;
var x = point.get();
point.set(10);
