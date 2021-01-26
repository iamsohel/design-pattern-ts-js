import { DataSource } from './DataSource';
import { Chart } from './Chart';
import { SpreadSheet } from './SpreadSheet';
let dataSource = new DataSource()
let ss = new SpreadSheet();
let ss2 = new SpreadSheet();
let chart = new Chart()

dataSource.addObserver(ss);
dataSource.addObserver(ss2);
dataSource.addObserver(chart);

dataSource.setValue(1)