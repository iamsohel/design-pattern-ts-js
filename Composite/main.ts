import { Shape } from './Shape';
import { Group } from './Group';
let g1 = new Group()
g1.add(new Shape())
g1.add(new Shape())
g1.render()

let g2 = new Group()
g2.add(new Shape())
g2.add(new Shape())
g2.render()