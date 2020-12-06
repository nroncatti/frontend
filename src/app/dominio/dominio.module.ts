import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DominioComponent } from './dominio.component';
import { DominioRoutingModule } from './dominio.routing.module';

@NgModule({
  declarations: [DominioComponent],
  imports: [
    CommonModule,
    DominioRoutingModule
  ]
})
export class DominioModule { }
