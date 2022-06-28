import { Farmaceutico } from './../domain/farmaceutico';
import { FarmaceuticoService } from './../service/farmaceutico.service';
import { ClienteService } from './../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Pedido } from '../domain/pedido';
import { PedidoService } from '../service/pedido.service';
import { Cliente } from '../domain/cliente';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
})
export class PedidoComponent implements OnInit {
  pedidos: Pedido[] = [];
  farmaceuticos: Farmaceutico[] = [];
  clientes: Cliente[] = [];

  form: FormGroup = this.formBuilder.group({
    idFarmaceutico: new FormControl('', [Validators.required]),
    idCliente: new FormControl('', [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private farmaceuticoService: FarmaceuticoService
  ) {}

  ngOnInit(): void {
    this.consultarPedidos();
    this.consultarClientes();
    this.consultarFarmaceuticos();
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

  private resetForm(): void {
    this.form.reset();
    this.form.controls['idFarmaceutico'].setValue('');
    this.form.controls['idCliente'].setValue('');
  }
}
