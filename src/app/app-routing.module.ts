import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesaListComponent } from './components/despesa/despesa-list/despesa-list.component';
import { AddDespesaComponent } from './components/despesa/add-despesa/add-despesa.component';
import { EditDespesaComponent } from './components/despesa/edit-despesa/edit-despesa.component';

const routes: Routes = [
  {
    path: '',
    component: DespesaListComponent
  },
  {
    path: 'despesa',
    component: DespesaListComponent
  },
  {
    path: 'despesa/add',
    component: AddDespesaComponent
  },
  {
    path: 'despesa/edit/:codDespesa', 
    component: EditDespesaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
