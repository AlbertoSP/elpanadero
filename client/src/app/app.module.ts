import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from './services/session.service';
import { ProductListService } from './services/productList.service';
import { PedidoService } from './services/pedidos.service';
import { AgmCoreModule } from '@agm/core';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { MyHomeComponent } from './home/home.component';
import { MyNewProductComponent } from './newproduct/newproduct.component';
import { MyNuevoPedidoComponent } from './pedido/pedido.component';
import {MapaComponent} from './mapa/mapa.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ProductListComponent,
    MyHomeComponent,
    MyNewProductComponent,
    AppComponent,
    MyNuevoPedidoComponent,
    MapaComponent,
    


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8_gfkDwmxRQ1Gv6dNoQzBVvGXJixiSKk'
    })
  ],
  providers: [SessionService, ProductListService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
