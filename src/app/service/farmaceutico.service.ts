import { Farmaceutico } from './../domain/farmaceutico';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FarmaceuticoService {
  private url = 'http://localhost:8080/farmaceutico/';

  constructor(private http: HttpClient) {}

  consultar(): Observable<Farmaceutico[]> {
    return this.http.get<Farmaceutico[]>(this.url + 'consultar');
  }

  cegonha(): Observable<Farmaceutico> {
    return this.http.post<Farmaceutico>(this.url + 'cadastrar-random', {});
  }

  remover(id: string): Observable<Farmaceutico> {
    return this.http.delete<Farmaceutico>(this.url + 'remover/' + id);
  }
}
