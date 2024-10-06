import { ConexaoService } from './../../services/conexao.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  conexoes : number = 1;
  constructor(private conexaoService: ConexaoService){
    conexaoService.contarConexoes().subscribe(res => {
      this.conexoes = res?.map(i=>{
        return{
          value: i.id,
        }
      })

    });
  }


}
