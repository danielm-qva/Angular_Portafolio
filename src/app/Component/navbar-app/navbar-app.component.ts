import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navbar-app',
  templateUrl: './navbar-app.component.html',
  styleUrls: ['./navbar-app.component.css'],
})
export class NavbarAppComponent implements OnInit {
  constructor() {}

  url_git = '';

  ngOnInit(): void {
    this.url_git = environment.url_git;
  }
}
