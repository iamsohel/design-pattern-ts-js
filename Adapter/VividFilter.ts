import { Image } from './Image';
import { Filter } from "./Filter";

export class VividFilter implements Filter{
    apply(image: Image): void{
        console.log("apply vivid filter")
    }
}