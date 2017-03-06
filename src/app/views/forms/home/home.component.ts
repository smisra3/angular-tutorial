import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Forms';
  submenu = [{
    name: 'Template Driven Form',
    path: 'template'
  }, {
    name: 'Model Driven Form',
    path: 'model'
  }];

  constructor() { }

  ngOnInit() {
  }

}
