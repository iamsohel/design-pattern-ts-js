
//before applying strategy pattern

class ImageStorageBefore {
    compressor: string;
    filter: string;

    store(file: string){
        if(this.compressor == 'png'){
            console.log('compressor using png')
        } else if (this.compressor == 'jpeg') {
            console.log('compressor using jpeg')
        }

        if(this.filter == 'b&w'){
            console.log('applying filter using black and white');
        } else if( this.filter == 'high-contrast') {
            console.log('filter applying using high-contrast')
        }
    }
}




// after implements strategy pattern
interface Compressor {
    compress(file: string)
}

interface Filter {
    apply(file: string)
}

class JpegCompressor implements Compressor{
    compress(file: string){
        console.log('Compress using jpeg')
    }
}

class PngCompressor implements Compressor{
    compress(file: string){
        console.log('Compress using png')
    }
}

class BlackandWhite implements Filter {
    apply(file: string){
        console.log("filter using b&h")
    }
}

class ImageStorage {

    store(file: string, compressor: Compressor, filter: Filter){
        compressor.compress(file)
        filter.apply(file)
    }
}

let imgStore = new ImageStorage()
imgStore.store('s', new JpegCompressor, new BlackandWhite());
imgStore.store('s', new PngCompressor, new BlackandWhite());