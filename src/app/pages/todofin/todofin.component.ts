import { Itodo } from '../../modules/itodo';
import { SerUtenteService } from '../../services/serutente.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-todofin',
  templateUrl: './todofin.component.html',
  styleUrl: './todofin.component.scss'
})
export class TodofinComponent {

todofin:Itodo[]=[]



constructor(private usersvc: SerUtenteService) { }

ngOnInit(){
this.todofin = this.usersvc.getCompleted()
console.log(this.todofin)



}


}
