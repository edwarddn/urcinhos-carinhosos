import { FornecedorModel } from './../model/fornecedor-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedor } from '../domain/fornecedor';

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  private url = 'http://localhost:8080/fornecedor/';

  constructor(private http: HttpClient) {}

  consultar(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.url + 'consultar');
  }

  cadastrar(fornecedorModel: FornecedorModel): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.url + 'cadastrar', fornecedorModel);
  }

  cegonha(): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.url + 'cadastrar-randon', {});
  }

  alterar(id: string, model: FornecedorModel): Observable<Fornecedor> {
    return this.http.put<Fornecedor>(this.url + 'alterar/' + id, model);
  }

  remover(id: string): Observable<Fornecedor> {
    return this.http.delete<Fornecedor>(this.url + 'remover/' + id);
  }
}
