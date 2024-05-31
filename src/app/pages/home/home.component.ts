import { Component } from '@angular/core';
import { Iuser } from '../../modules/iuser';
import { SerUtenteService } from '../../services/serutente.service';
import { Itodo } from '../../modules/itodo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

todoconautore:Itodo[]=[];


constructor(private usersvc: SerUtenteService ) {}

ngOnInit(){

this.todoconautore = this.usersvc.getPost();
}










}
