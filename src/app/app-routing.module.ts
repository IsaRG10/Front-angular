import { ListaProductoComponent } from './shared/components/lista-producto/lista-producto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch:'full' },
  { path: 'lista', component: ListaProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
