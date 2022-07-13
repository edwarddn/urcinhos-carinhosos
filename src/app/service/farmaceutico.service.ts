import { Farmaceutico } from './../domain/farmaceutico';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FarmaceuticoModel} from "../model/farmaceutico-model";

@Injectable({
  providedIn: 'root',
})
export class FarmaceuticoService {
  private url = 'http://localhost:8080/farmaceutico/';

  constructor(private http: HttpClient) {}

  consultar(): Observable<FarmaceuticoModel[]> {
    return this.http.get<FarmaceuticoModel[]>(this.url + 'consultar');
  }

  cegonha(): Observable<FarmaceuticoModel> {
    return this.http.post<FarmaceuticoModel>(this.url + 'cadastrar-random', {});
  }

  remover(id: string): Observable<FarmaceuticoModel> {
    return this.http.delete<FarmaceuticoModel>(this.url + 'remover/' + id);
  }
}
