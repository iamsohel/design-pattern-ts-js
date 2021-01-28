import { Stream } from './Stream';

export class CompressedCloudStream implements Stream{
    stream : Stream;
    constructor(stream: Stream) {
        this.stream = stream;
    }
    write(data: string): void {
        let compress = this.compress(data)
        this.stream.write(compress);
    }

    compress (data: string): string {
        return data.slice(0, 4);
    }
}