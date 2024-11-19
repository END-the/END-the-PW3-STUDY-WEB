import { ConexaoService } from './../../services/conexao.service';
import { DisciplinaService } from './../../services/disciplina.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  conexoes : number =  0;
  constructor(private conexaoService: ConexaoService){
    conexaoService.contarConexoes().subscribe(res => {
      this.conexoes = res;

    });
  }


}
