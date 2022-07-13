import {ProdutoModel} from "./produto-model";

export interface PedidoModel {
  id: string;
  idFarmaceutico: string;
  nomeFarmaceutico?: string;
  idCliente: string;
  nomeCliente?: string;
  produtos?: Array<ProdutoModel>;
  valor?: number;
  valorPago?: number;
  troco?: number;
  dataEmissao?: Date;
  dataPagamento?: Date;
  dataCancelamento?: Date;
  status?: string;
}
