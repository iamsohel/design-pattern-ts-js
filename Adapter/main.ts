import { CaramelFilter } from './CaramelFilter';
import { Caramel } from './avaFilters/Caramel';
import { VividFilter } from './VividFilter';
import { Image } from './Image';
import { ImageView } from './ImageView';
let imageView = new ImageView(new Image());
//imageView.apply(new VividFilter())
imageView.apply(new CaramelFilter(new Caramel()))