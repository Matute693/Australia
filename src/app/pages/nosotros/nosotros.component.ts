import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../shared/interfaces/menu.interface';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  public job: string = `Front end developer.`;
  public textAboutMe: string = `My name is Matias, I am from Argentina, I have worked in software in different projects,
  I specialize in graphical interfaces but I have worked in the backend with Node Js. This project was made with Angular,
  I hope you liked this little page about me and Australia. Click on the button below to see some of my projects.`

  public navbarRoutes: MenuItem[] = [
    {
      text: 'Proyects',
      path: '/pages/proyects'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
