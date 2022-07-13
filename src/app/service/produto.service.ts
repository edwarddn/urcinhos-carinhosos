import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdutoModel } from '../model/produto-model';
import { Produto } from '../domain/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  cadastrar(model: ProdutoModel): Observable<ProdutoModel> {
    const url = 'http://localhost:8080/produto/cadastrar';
    return this.http.post<Produto>(url, model);
  }

  alterar(id: string, model: ProdutoModel): Observable<ProdutoModel> {
    const url = 'http://localhost:8080/produto/alterar';
    return this.http.put<ProdutoModel>(url, model);
  }

  remover(id: string): Observable<ProdutoModel> {
    const url = 'http://localhost:8080/produto/remover/' + id;
    return this.http.delete<ProdutoModel>(url);
  }

  consultar(): Observable<ProdutoModel[]> {
    const url = 'http://localhost:8080/produto/consultar';
    return this.http.get<ProdutoModel[]>(url);
  }
}
