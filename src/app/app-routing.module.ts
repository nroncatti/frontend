import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DominioComponent } from './dominio/dominio.component';

const routes: Routes = [
  { path: 'dominio',
    loadChildren: './dominio/dominio.module#DominioModule'
  },
 

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
