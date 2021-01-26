
import { Iterator } from './Iterator';
export class BrowserHistory {
    public urls:string[] = [];

    push(url: string): void{
        this.urls.push(url);
    }

    pop():string {
        let lastIndex = this.urls.pop();
        return lastIndex;
    }

    public getUrls(): string[]{
        return this.urls;
    }
}

public ite

export class ListIterator implements Iterator{
    private history: BrowserHistory;
    private index: number;
    
    constructor(history: BrowserHistory){
        this.history = history
    }

    hasNext(): boolean{
        return (this.index < this.history.getUrls.length)
    }

    current(): string {
        return this.history.urls;
    }
    next(): void{
        this.index++;
    }
}