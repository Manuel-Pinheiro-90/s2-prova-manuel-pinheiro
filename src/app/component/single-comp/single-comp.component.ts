import { Component, Input } from '@angular/core';

import { Itodo } from '../../modules/itodo';


@Component({
  selector: 'app-single-comp',
  templateUrl: './single-comp.component.html',
  styleUrl: './single-comp.component.scss'
})
export class SingleCompComponent {




@Input() art!:Itodo;

}
