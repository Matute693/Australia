import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProyectsComponent } from './proyects/proyects.component';


@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    ProyectsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class PagesModule { }
