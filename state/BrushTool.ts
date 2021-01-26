import {Tool} from './Tool'
export class BrushTool implements Tool {
    mouseDown(){
        console.log('Brush Icon')
    }
    mouseUp(){
        console.log('Drawing Brush')
    }
}