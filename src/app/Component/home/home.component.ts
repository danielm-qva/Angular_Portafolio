import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export interface skillType {
  clasIcon: string;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  exp = 0;
  skill: Array<skillType> = [];

  ngOnInit(): void {
    this.exp = Math.abs(2020 - +new Date().getFullYear());
    this.skill = [
      {
        clasIcon: 'fab fa-angular fa-6x text-center p-2',
        title: 'Angular',
      },
      {
        clasIcon: 'fab fa-js fa-6x text-center p-2',
        title: 'JavaScript',
      },
      {
        clasIcon: 'fab fa-git fa-6x text-center p-2',
        title: 'Git',
      },
      {
        clasIcon: 'fab fa-database fa-6x text-center p-2',
        title: 'Database',
      },
      {
        clasIcon: 'fab fa-node fa-6x text-center p-2',
        title: 'Node JS ',
      },
      {
        clasIcon: 'fab fa-react fa-6x text-center p-2',
        title: 'React',
      },
    ];
  }
}
