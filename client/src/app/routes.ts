import { Routes } from '@angular/router'
import {LoginFormComponent} from "./login-form/login-form.component"
import {ProductListComponent} from './product-list/product-list.component'
import {MyHomeComponent} from './home/home.component'
import {MyNewProductComponent} from './newproduct/newproduct.component'
import {MyNuevoPedidoComponent} from './pedido/pedido.component'
import {MapaComponent} from './mapa/mapa.component'
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: MyHomeComponent },
    { path: 'list',  component: ProductListComponent },
    { path: 'singup',  component:  LoginFormComponent}, 
    { path: 'newproduct',  component:  MyNewProductComponent},  
    { path: 'nuevopedido',  component:  MyNuevoPedidoComponent},  
    { path: 'mapa',  component:  MapaComponent}, 
];