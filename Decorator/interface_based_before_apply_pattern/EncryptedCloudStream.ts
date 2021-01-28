import { CloudStream } from './CloudStream';
export class EncryptedCloudStream extends CloudStream{
    write(data: string): void {
        let encrypt = this.encrypt(data)
        super.write(encrypt)
    }

    encrypt(data: string): string {
        return 'w39q45uwersoersadf';
    }
}