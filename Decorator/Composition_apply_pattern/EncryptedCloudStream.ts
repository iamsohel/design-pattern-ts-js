import { Stream } from './Stream';
export class EncryptedCloudStream implements Stream{
    stream: Stream;
    constructor(stream: Stream){
        this.stream = stream;
    }
    write(data: string): void {
        let encrypt = this.encrypt(data)
        this.stream.write(encrypt)
    }

    encrypt(data: string): string {
        return 'w39q45uwersoersadf';
    }
}