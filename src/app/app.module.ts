import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreModule } from './sobre/sobre.module';
import { MenuModule } from './menu/menu.module';
import { ClienteModule } from './cliente/cliente.module';
import { FarmaceuticoModule } from './farmaceutico/farmaceutico.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SobreModule,
    MenuModule,
    ClienteModule,
    FarmaceuticoModule,
    FornecedorModule,
    ProdutoModule,
    PedidoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
