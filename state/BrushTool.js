"use strict";
exports.__esModule = true;
exports.BrushTool = void 0;
var BrushTool = /** @class */ (function () {
    function BrushTool() {
    }
    BrushTool.prototype.mouseDown = function () {
        console.log('Brush Icon');
    };
    BrushTool.prototype.mouseUp = function () {
        console.log('Drawing Brush');
    };
    return BrushTool;
}());
exports.BrushTool = BrushTool;
