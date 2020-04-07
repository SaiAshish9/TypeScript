"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    //   private  x:number;
    //     y:number;
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log(this.x, this.y);
    };
    Point.prototype.get = function () {
        return this.x;
    };
    Point.prototype.set = function (x) {
        if (x < 0)
            throw new Error('Invalid Value');
        this.x = x;
    };
    Object.defineProperty(Point.prototype, "X", {
        // properties tsc -t es5 classes.ts
        // tsc *.ts --target ES5
        get: function () {
            return this.x;
        },
        set: function (a) {
            if (a < 0)
                throw new Error('Invalid Value');
            this.x = a;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
