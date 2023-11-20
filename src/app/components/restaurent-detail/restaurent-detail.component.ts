import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurent-detail',
  templateUrl: './restaurent-detail.component.html',
  styleUrls: ['./restaurent-detail.component.scss'],
})
export class RestaurentDetailComponent implements OnInit {
  @Input() data: any;
  @Input() isLoading;

  constructor() {}

  ngOnInit() {}

  getCuisine(cuisine) {
    return cuisine.join(', ');
  }
}
