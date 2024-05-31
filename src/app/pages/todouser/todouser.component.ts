import { Component } from '@angular/core';
import { SerUtenteService } from '../../services/serutente.service';
import { Iuser } from '../../modules/iuser';
import { ServtodoService } from '../../services/servtodo.service';

@Component({
  selector: 'app-todouser',
  templateUrl: './todouser.component.html',
  styleUrl: './todouser.component.scss'
})
export class TodouserComponent {


utenticontodo:Iuser[]=[];

  constructor(private usersvc: SerUtenteService,  private todosvc:ServtodoService) {}

  ngOnInit(){

    this.utenticontodo = this.usersvc.getpostAutor();

    console.log(this.utenticontodo);
  }




}
