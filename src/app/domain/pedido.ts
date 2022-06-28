import { Cliente } from './cliente';
import { Farmaceutico } from './farmaceutico';
import { Produto } from './produto';

export interface Pedido {
  id: string;
  farmaceutico: Farmaceutico;
  cliente: Cliente;
  produtos: Produto[];
  valor: number;
  valorPago: number;
  troco: number;
  dataEmissao: Date;
  dataPagamento: Date;
  dataCancelamento: Date;
  status: string;
}
