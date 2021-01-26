import { Image } from './Image';
import { Caramel } from './avaFilters/Caramel';
import { Filter } from "./Filter";

export class CaramelFilter implements Filter {
    caramel: Caramel;

    constructor(caramel: Caramel){
        this.caramel = caramel;
    }

    apply(image: Image){
        this.caramel.init();
        this.caramel.render(image)
    }
}