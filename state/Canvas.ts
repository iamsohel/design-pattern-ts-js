import { ToolType } from './ToolType';
import { Tool } from './Tool';
//before
class Canvas2 {
    currentTool: ToolType;
    MouseDown(){
        if(this.currentTool == ToolType.Selection) {
            console.log('Selection Icon');
        } else if(this.currentTool == ToolType.Brush){
            console.log('Brush Icon')
        } else if(this.currentTool == ToolType.Eraser){
            console.log("Eraser Icon")
        }
    }

    MouseUp(){
        if(this.currentTool == ToolType.Selection) {
            console.log('Drawing Selection');
        } else if(this.currentTool == ToolType.Brush){
            console.log('Drawing Brush')
        } else if(this.currentTool == ToolType.Eraser){
            console.log("Drawing Eraser")
        }
    }
}

//after applying design pattern

export class Canvas {
    currentTool: Tool;
    MouseDown(){
        this.currentTool.mouseDown();
    }

    MouseUp(){
        this.currentTool.mouseUp();
    }

    getCurrentTool(): Tool{
        return this.currentTool;
    }

    setCurrentTool(currentTool: Tool){
        this.currentTool = currentTool;
    }
}
