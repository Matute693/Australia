import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navbarRoutes: MenuItem[] = [
    {
      text:'Home',
      path: 'pages/inicio'
    },
    {
      text: 'About me',
      path: 'pages/nosotros'
    },
    {
      text: 'Proyects',
      path: 'pages/proyects'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
