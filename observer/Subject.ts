import { Observer } from './Observer';
export class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void{
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void{
        this.observers.pop();
    }

    notifyObserver(){
        for(let i = 0; i < this.observers.length; i++){
            this.observers[i].update();
        }
    }
}