import { CloudStream } from './CloudStream';
export class CompressedCloudStream extends CloudStream{
    write(data: string): void {
        let compress = this.compress(data)
        super.write(compress);
    }

    compress (data: string): string {
        return data.slice(0, 4);
    }
}