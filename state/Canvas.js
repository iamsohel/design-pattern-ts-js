"use strict";
exports.__esModule = true;
exports.Canvas = void 0;
var ToolType_1 = require("./ToolType");
//before
var Canvas2 = /** @class */ (function () {
    function Canvas2() {
    }
    Canvas2.prototype.MouseDown = function () {
        if (this.currentTool == ToolType_1.ToolType.Selection) {
            console.log('Selection Icon');
        }
        else if (this.currentTool == ToolType_1.ToolType.Brush) {
            console.log('Brush Icon');
        }
        else if (this.currentTool == ToolType_1.ToolType.Eraser) {
            console.log("Eraser Icon");
        }
    };
    Canvas2.prototype.MouseUp = function () {
        if (this.currentTool == ToolType_1.ToolType.Selection) {
            console.log('Drawing Selection');
        }
        else if (this.currentTool == ToolType_1.ToolType.Brush) {
            console.log('Drawing Brush');
        }
        else if (this.currentTool == ToolType_1.ToolType.Eraser) {
            console.log("Drawing Eraser");
        }
    };
    return Canvas2;
}());
//after applying design pattern
var Canvas = /** @class */ (function () {
    function Canvas() {
    }
    Canvas.prototype.MouseDown = function () {
        this.currentTool.mouseDown();
    };
    Canvas.prototype.MouseUp = function () {
        this.currentTool.mouseUp();
    };
    Canvas.prototype.getCurrentTool = function () {
        return this.currentTool;
    };
    Canvas.prototype.setCurrentTool = function (currentTool) {
        this.currentTool = currentTool;
    };
    return Canvas;
}());
exports.Canvas = Canvas;
