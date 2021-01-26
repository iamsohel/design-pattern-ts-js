import { EditorState } from './EditorState';

export class History {
    states: EditorState[] = [];

    push(state: EditorState){
        this.states.push(state)
    }

    pop() {
        return this.states.pop()
    }
}