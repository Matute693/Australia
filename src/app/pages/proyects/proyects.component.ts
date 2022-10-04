import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../shared/interfaces/menu.interface';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  public proyectInformation: MenuItem[] = [
    {
      text:'Movies',
      path: 'https://movies-steam.netlify.app'
    },
    {
      text:'Rick and Morty',
      path: 'https://morty-app.netlify.app/'
    },
    {
      text:'Profile Web',
      path: 'https://matiasprofile.netlify.app/'
    },
    {
      text: 'Calculator BMI',
      path: 'https://calculador-peso-corporal.netlify.app/'
    },
    {
      text: 'Medical turner',
      path: 'https://turnero-medico.netlify.app/'
    },
    {
      text: 'Real estate',
      path: 'https://matute693.github.io/Bienes-Raices/'
    },
    {
      text: 'Task list',
      path: 'https://app-tarea.netlify.app/'
    },
    {
      text: 'Trips',
      path: 'https://viajesmundo.netlify.app'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
