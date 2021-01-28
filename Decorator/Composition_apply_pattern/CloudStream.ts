import { Stream } from './Stream';
export class CloudStream implements Stream{
    write(data: string): void {
        console.log("Storing: ", data);
    }
}