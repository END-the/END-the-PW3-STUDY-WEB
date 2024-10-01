import { ConexaoService } from './../../services/conexao.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private conexaoService: ConexaoService){
    conexaoService.buscarDisciplinas().subscribe(res => {
      this.disciplinas = res?.cont().

    });
  }

  conexoes : number = 1;

}
