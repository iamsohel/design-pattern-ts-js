import { Observer } from './Observer';
export class SpreadSheet implements Observer {
    update(): void{
        console.log("Spreadsheet got notified")
    }
}