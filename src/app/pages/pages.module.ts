import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class PagesModule { }
