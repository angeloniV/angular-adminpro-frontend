import { Component } from '@angular/core';
import { MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {

  data: MultiDataSet = [
    [10, 15, 40],
  ];

  labels1: string[] = ['Pan', 'Bebidas', 'Milanesas'];
}
