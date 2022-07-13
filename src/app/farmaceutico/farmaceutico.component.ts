import { FarmaceuticoService } from './../service/farmaceutico.service';
import { Component, OnInit } from '@angular/core';
import { Farmaceutico } from '../domain/farmaceutico';
import {FarmaceuticoModel} from "../model/farmaceutico-model";

@Component({
  selector: 'app-farmaceutico',
  templateUrl: './farmaceutico.component.html',
  styleUrls: ['./farmaceutico.component.scss'],
})
export class FarmaceuticoComponent implements OnInit {
  lista: FarmaceuticoModel[] = [];

  constructor(private farmaceuticoService: FarmaceuticoService) {}

  ngOnInit(): void {
    this.consultar();
  }

  cegonha(): void {
    this.farmaceuticoService.cegonha().subscribe(() => {
      this.consultar();
    });
  }

  excluir(f: FarmaceuticoModel): void {
    this.farmaceuticoService.remover(f.id).subscribe(() => {
      this.consultar();
    });
  }

  consultar(): void {
    this.farmaceuticoService.consultar().subscribe((list: FarmaceuticoModel[]) => {
      this.lista = list;
    });
  }
}
