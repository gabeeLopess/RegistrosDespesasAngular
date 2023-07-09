import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DespesaListComponent } from './components/despesa/despesa-list/despesa-list.component';
import { AddDespesaComponent } from './components/despesa/add-despesa/add-despesa.component';
import { FormsModule } from '@angular/forms';
import { EditDespesaComponent } from './components/despesa/edit-despesa/edit-despesa.component';

@NgModule({
  declarations: [
    AppComponent,
    DespesaListComponent,
    AddDespesaComponent,
    EditDespesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }