import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'proyects',
        component: ProyectsComponent
      },
      {
        path: 'nosotros',
        component: NosotrosComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
