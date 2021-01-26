import { EditorState } from './EditorState';

export class Editor {
    content: string;

    createContent(): EditorState {
        return new EditorState(this.content)
    }

    getContent(){
        return this.content;
    }

    restore(state: EditorState){
        this.content = state.getContent();
    }

    setContent(content: string){
        this.content =  content;
    }
}