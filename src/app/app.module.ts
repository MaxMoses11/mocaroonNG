import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductsService} from "./services/products.service";
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonBackgroundDirective } from './directives/button-background.directive';
import { DecorateAdvantagePipe } from './pipes/decorate-advantage.pipe';
import { DecoratePhonePipe } from './pipes/decorate-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    ProductComponent,
    ButtonBackgroundDirective,
    DecorateAdvantagePipe,
    DecoratePhonePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
