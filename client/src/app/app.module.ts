import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from './services/session.service';
import { ProductListService } from './services/productList.service';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from "@angular/router";
import {routes} from "./routes";
import { MyHomeComponent } from './home/home.component';
import { MyNewProductComponent } from './newproduct/newproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ProductListComponent,
    MyHomeComponent,
    MyNewProductComponent,
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService,ProductListService,],
  bootstrap: [AppComponent]
})
export class AppModule { }