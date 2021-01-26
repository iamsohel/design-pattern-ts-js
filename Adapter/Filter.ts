import { Image } from './Image';
export interface Filter {
    apply(image: Image): void;
}