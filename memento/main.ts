import { Editor } from './Editor';
import { History } from './History';

const editor = new Editor();
const history = new History();

editor.setContent('a');
history.push(editor.createContent());

editor.setContent('b');
history.push(editor.createContent());

editor.setContent('c');
editor.restore(history.pop())

console.log(editor.getContent())