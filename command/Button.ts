import { Command } from './command';
export class Button {
    label: string;
    command: Command;

    constructor(command: Command){
        this.command = command;
    }

    click(){
        this.command.execute();
    }

    getLabel(){
        return this.label;
    }

    setLabel(label: string){
        this.label = label;
    }
}