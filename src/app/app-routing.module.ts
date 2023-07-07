import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesaListComponent } from './components/despesa/despesa-list/despesa-list.component';

const routes: Routes = [
  {
    path: '',
    component: DespesaListComponent
  },
  {
    path: 'despesa',
    component: DespesaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
