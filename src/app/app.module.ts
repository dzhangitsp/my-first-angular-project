import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {CategoriesService} from './common/northwind.service';
import { OrderService } from './common/order.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoriesService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
