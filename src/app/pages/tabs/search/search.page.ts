import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild('searchInput') sInput;
  query: any;
  restaurants: any[] = [];
  allrestaurants: any[] = [
    {
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dNLXoDDRCkGPnBCGHWez3CxJFRKr0eGlBA&usqp=CAU',
      name: 'Haldirams',
      short_name: 'Ramu Kaka',
      cuisines: ['Gujrati', 'Marwadi', 'Punjabi'],
      rating: 5,
      delivery_time: 7,
      distance: 2.5,
      price: 100,
    },
    {
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dNLXoDDRCkGPnBCGHWez3CxJFRKr0eGlBA&usqp=CAU',
      name: 'Rasraj',
      short_name: 'Ramu Kaka',
      cuisines: ['South Indian'],
      rating: 5,
      delivery_time: 7.5,
      distance: 2.5,
      price: 100,
    },
    {
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHm18IGPgsY84_ob-qzQ7Z3OcCZOmtBoUKA&usqp=CAU',
      name: 'Anna Saoji',
      short_name: 'ramu',
      cuisines: ['Indian'],
      rating: 5,
      delivery_time: 5.5,
      distance: 5,
      price: 100,
    },
  ];
  constructor() {}
  OnSearchChange(event) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    if (this.query.length > 0) {
      this.restaurants = this.allrestaurants.filter((element: any) => {
        return element.short_name.includes(this.query);
      });
      console.log(this.restaurants);
    }
  }
  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
  }
}
