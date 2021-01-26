"use strict";
exports.__esModule = true;
exports.Editor = void 0;
var EditorState_1 = require("./EditorState");
var Editor = /** @class */ (function () {
    function Editor() {
    }
    Editor.prototype.createContent = function () {
        return new EditorState_1.EditorState(this.content);
    };
    Editor.prototype.getContent = function () {
        return this.content;
    };
    Editor.prototype.restore = function (state) {
        this.content = state.getContent();
    };
    Editor.prototype.setContent = function (content) {
        this.content = content;
    };
    return Editor;
}());
exports.Editor = Editor;
