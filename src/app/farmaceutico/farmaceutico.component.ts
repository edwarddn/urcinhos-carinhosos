import { FarmaceuticoService } from './../service/farmaceutico.service';
import { Component, OnInit } from '@angular/core';
import { Farmaceutico } from '../domain/farmaceutico';

@Component({
  selector: 'app-farmaceutico',
  templateUrl: './farmaceutico.component.html',
  styleUrls: ['./farmaceutico.component.scss'],
})
export class FarmaceuticoComponent implements OnInit {
  lista: Farmaceutico[] = [];

  constructor(private farmaceuticoService: FarmaceuticoService) {}

  ngOnInit(): void {
    this.consultar();
  }

  cegonha(): void {
    this.farmaceuticoService.cegonha().subscribe(() => {
      this.consultar();
    });
  }

  excluir(f: Farmaceutico): void {
    this.farmaceuticoService.remover(f.id).subscribe(() => {
      this.consultar();
    });
  }

  consultar(): void {
    this.farmaceuticoService.consultar().subscribe((list: Farmaceutico[]) => {
      this.lista = list;
    });
  }
}
