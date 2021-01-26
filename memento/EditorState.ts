export class EditorState {
    content: string;
    constructor(content: string){
        this.content = content
    }

    getContent(){
        return this.content;
    }
}