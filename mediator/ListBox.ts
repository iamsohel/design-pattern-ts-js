import { DialogBox } from './DialogBox';
import { UIControl } from './UIControl';

export class ListBox extends UIControl {
    public  selection: string;
    constructor(dialogBox: DialogBox){
        super(dialogBox)
    }

    getListBox(){
        return this.selection;
    }

    setListBox(selection: string){
        this.selection = selection;
        this.owner.change(this.selection)
    }
}