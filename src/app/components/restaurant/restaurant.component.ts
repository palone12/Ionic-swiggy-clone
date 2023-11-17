import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  @Input() restaurent: any;
  constructor() {}

  ngOnInit() {
    console.log(this.restaurent);
  }
  getCuisine(cuisine) {
    return cuisine.join(', ');
  }
}
