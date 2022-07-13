import { FarmaceuticoService } from './../service/farmaceutico.service';
import { ClienteService } from './../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PedidoService } from '../service/pedido.service';
import { ProdutoService } from '../service/produto.service';
import {PedidoModel} from "../model/pedido-model";
import {ProdutoModel} from "../model/produto-model";
import {ClienteModel} from "../model/cliente-model";
import {FarmaceuticoModel} from "../model/farmaceutico-model";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
})
export class PedidoComponent implements OnInit {
  pedidos: PedidoModel[] = [];
  farmaceuticos: FarmaceuticoModel[] = [];
  clientes: ClienteModel[] = [];
  produtos: ProdutoModel[] = [];

  form: FormGroup = this.formBuilder.group({
    idFarmaceutico: new FormControl('', [Validators.required]),
    idCliente: new FormControl('', [Validators.required]),
  });

  formAddProduto: FormGroup = this.formBuilder.group({
    idPedido: new FormControl('', [Validators.required]),
    idProduto: new FormControl('', [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private farmaceuticoService: FarmaceuticoService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.consultarPedidos();
    this.consultarClientes();
    this.consultarFarmaceuticos();
    this.consultarProdutos();
  }

  private consultarFarmaceuticos(): void {
    this.farmaceuticoService.consultar().subscribe((x) => {
      this.farmaceuticos = x;
    });
  }

  private consultarClientes(): void {
    this.clienteService.consultar().subscribe((x) => {
      this.clientes = x;
    });
  }

  private consultarPedidos(): void {
    this.pedidoService.consultar().subscribe((x) => {
      this.pedidos = x;
    });
  }

  private consultarProdutos(): void {
    this.produtoService.consultar().subscribe((x) => {
      this.produtos = x;
    });
  }

  cadastrar(): void {
    if (this.form.valid) {
      const idFarmaceutico = this.form.controls['idFarmaceutico'].value;
      const idCliente = this.form.controls['idCliente'].value;
      this.pedidoService.cadastrar(idFarmaceutico, idCliente).subscribe(() => {
        this.consultarPedidos();
        this.resetForm();
      });
    }
  }

  verModal(pedido: PedidoModel): void {
    this.formAddProduto.controls['idPedido'].setValue(pedido.id);
  }

  addProduto(): void {
    if (this.formAddProduto.valid) {
      const idPedido = this.formAddProduto.controls['idPedido'].value;
      const idProduto = this.formAddProduto.controls['idProduto'].value;
      this.pedidoService
        .adicionarProdutos(idPedido, idProduto)
        .subscribe(() => {
          this.consultarPedidos();
          this.resetForm();
        });
    }
  }

  private resetForm(): void {
    this.form.reset();
    this.form.controls['idFarmaceutico'].setValue('');
    this.form.controls['idCliente'].setValue('');

    this.formAddProduto.reset();
    this.formAddProduto.controls['idProduto'].setValue('');
  }
}
