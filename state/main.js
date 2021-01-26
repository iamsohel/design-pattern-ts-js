"use strict";
exports.__esModule = true;
var BrushTool_1 = require("./BrushTool");
var Canvas_1 = require("./Canvas");
var canvas = new Canvas_1.Canvas();
canvas.setCurrentTool(new BrushTool_1.BrushTool());
canvas.MouseDown();
canvas.MouseUp();
