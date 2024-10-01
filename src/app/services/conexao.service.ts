import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conexao } from '../models/conexao';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {

  apiUrl: string = 'http://localhost:8080/conexoes'
  constructor(private HttpClient: HttpClient) { }

  contarConexoes(): Observable<number>{
    return this.HttpClient.get<number>(`${this.apiUrl}`);
  }
}
