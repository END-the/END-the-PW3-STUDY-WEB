import { ConexaoService } from './../../services/conexao.service';
import { DisciplinaService } from './../../services/disciplina.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

<<<<<<< HEAD
  conexoes : number =  0;
  constructor(private conexaoService: ConexaoService){
    conexaoService.contarConexoes().subscribe(res => {
      this.conexoes = res;
=======
  conexoes : number = 1;
  constructor(private conexaoService: ConexaoService){
    conexaoService.contarConexoes().subscribe(res => {
      this.conexoes = res?.map(i=>{
        return{
          value: i.id,
        }
      })
>>>>>>> 35cb06eb8abb5e6a8067e2372120c41ed6afc6fe

    });
  }


}
