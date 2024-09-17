import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from '../models/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  URL: string = 'https://localhost:8080/disciplinas'

  constructor(private httpClient: HttpClient) { }

  buscarDisciplinas(): Observable<Disciplina[]>{
    return this.httpClient.get<Disciplina[]>(this.URL)
  }

}
