"use strict";
exports.__esModule = true;
var CaramelFilter_1 = require("./CaramelFilter");
var Caramel_1 = require("./avaFilters/Caramel");
var Image_1 = require("./Image");
var ImageView_1 = require("./ImageView");
var imageView = new ImageView_1.ImageView(new Image_1.Image());
//imageView.apply(new VividFilter())
imageView.apply(new CaramelFilter_1.CaramelFilter(new Caramel_1.Caramel()));
