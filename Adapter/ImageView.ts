import { Filter } from './Filter';
import { Image } from './Image';
export class ImageView{
    image: Image;

    constructor(image){
        this.image = image;
    }

    apply(filter: Filter): void {
        filter.apply(this.image);
    }
}