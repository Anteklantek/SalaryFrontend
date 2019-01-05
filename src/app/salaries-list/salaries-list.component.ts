import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salaries-list',
  templateUrl: './salaries-list.component.html',
  styleUrls: ['./salaries-list.component.css']
})
export class SalariesListComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() {}

  ngOnInit() {
  }

}
