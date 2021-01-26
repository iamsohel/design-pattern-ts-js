import { Component } from './Component';
export class Group implements Component {
    shapes: Component[] = [];

    add(shape: Component): void {
        this.shapes.push(shape)
    }

    render(){
        for(let i = 0; i < this.shapes.length; i++){
            this.shapes[i].render()
        }
    }
}