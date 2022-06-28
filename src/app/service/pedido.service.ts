import { Pedido } from './../domain/pedido';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private url = 'http://localhost:8080/pedido/';

  constructor(private http: HttpClient) {}

  consultar(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.url + 'consultar');
  }

  cadastrar(idFarmaceutico: String, idCliente: String): Observable<Pedido> {
    return this.http.post<Pedido>(this.url + 'cadastrar', {
      idFarmaceutico,
      idCliente,
    });
  }

  adicionarProdutos(id: string, idProduto: string): Observable<Pedido> {
    return this.http.put<Pedido>(this.url + 'adicionar-produtos/' + id, {
      idProdutos: [idProduto],
    });
  }

  pagar(id: string, valor: number): Observable<Pedido> {
    return this.http.put<Pedido>(this.url + 'pagar/' + id, {
      valor,
    });
  }
}
