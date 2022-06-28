import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponent } from './pedido.component';

@NgModule({
  declarations: [PedidoComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class PedidoModule {}
