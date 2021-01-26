import { Subject } from './Subject';
export class DataSource extends Subject{
    private value: number;

    getValue(): number {
        return this.value;
    }

    setValue(value: number): void {
        this.value = value;
        this.notifyObserver()
    }
}