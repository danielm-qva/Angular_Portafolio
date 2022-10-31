import { Component, OnInit } from '@angular/core';

export interface wrokType {
  title: string;
  description: string;
  url_repo: string;
  icono1: string;
  icono2: string;
  flag?: boolean;
}

@Component({
  selector: 'app-workk',
  templateUrl: './workk.component.html',
  styleUrls: ['./workk.component.css'],
})
export class WorkkComponent implements OnInit {
  constructor() {}

  work: Array<wrokType> = [];

  ngOnInit(): void {
    this.work = [
      {
        title: 'Angular + Node JS(express) ',
        description: 'Login basico con angular , rutas protegidas..',
        url_repo: 'https://github.com/danielm-qva/frontHeroku',
        icono1: 'fab fa-angular fa-5x mr-2',
        icono2: 'fab fa-node fa-5x ',
      },
      {
        title: 'CodeChange',
        description:
          'App realizada con react y nodejs , fue un codeChange para presentar durante un proceso de seleccion..',
        url_repo: 'https://github.com/danielm-qva/CodeChallenge',
        icono1: 'fab fa-react fa-5x mr-2',
        icono2: 'fab fa-node fa-5x ',
      },
      {
        title: 'MVP',
        description:
          'Simulador empresarial ... desarrollado con Angular por parte de FrontEnd.',
        url_repo: 'https://github.com/danielm-qva/MVP',
        icono1: 'fab fa-angular fa-5x mr-2',
        icono2: 'fab fa-angular',
      },
      {
        title: 'Portafolio',
        description:
          'Es mi app de portaflio digital.. Esta echo en Angular 14 y desplegado en Vercel. ',
        url_repo: 'https://github.com/danielm-qva/Angular_Portafolio',
        icono1: 'fab fa-angular fa-5x mr-2',
        icono2: '',
      },
      {
        title: 'BitBase',
        description: 'Estuve trabajadno en su remodealcion de su portal web',
        url_repo: '',
        icono1: 'fab fa-react fa-5x mr-2',
        icono2: '',
      },
    ];
  }
}
