import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {PedidoModel} from "../model/pedido-model";

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private url = 'http://localhost:8080/pedido/';

  constructor(private http: HttpClient) {}

  consultar(): Observable<PedidoModel[]> {
    return this.http.get<PedidoModel[]>(this.url + 'consultar');
  }

  cadastrar(idFarmaceutico: String, idCliente: String): Observable<PedidoModel> {
    return this.http.post<PedidoModel>(this.url + 'cadastrar', {
      idFarmaceutico,
      idCliente,
    });
  }

  adicionarProdutos(id: string, idProduto: string): Observable<PedidoModel> {
    return this.http.put<PedidoModel>(this.url + 'adicionar-produtos/' + id, {
      idProdutos: [idProduto],
    });
  }

  pagar(id: string, valor: number): Observable<PedidoModel> {
    return this.http.put<PedidoModel>(this.url + 'pagar/' + id, {
      valor,
    });
  }
}
