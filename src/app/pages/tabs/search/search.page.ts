import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild('searchInput') sInput;
  query: any;
  model: any = {
    icon: 'search-outline',
    title: 'No Results Found',
  };
  restaurants: any[] = [];
  isLoading: boolean = false;
  allrestaurants: any[] = [
    {
      uid: '12ew',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dNLXoDDRCkGPnBCGHWez3CxJFRKr0eGlBA&usqp=CAU',
      name: 'Haldirams',
      short_name: 'haldirams',
      cuisines: ['Gujrati', 'Marwadi', 'Punjabi'],
      rating: 5,
      delivery_time: 7,
      distance: 2.5,
      price: 100,
    },
    {
      uid: '123ew',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dNLXoDDRCkGPnBCGHWez3CxJFRKr0eGlBA&usqp=CAU',
      name: 'Rasraj',
      short_name: 'rasraj',
      cuisines: ['South Indian'],
      rating: 5,
      delivery_time: 7.5,
      distance: 2.5,
      price: 100,
    },
    {
      uid: '1234ew',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHm18IGPgsY84_ob-qzQ7Z3OcCZOmtBoUKA&usqp=CAU',
      name: 'Anna Saoji',
      short_name: 'anna',
      cuisines: ['Indian'],
      rating: 5,
      delivery_time: 5.5,
      distance: 5,
      price: 100,
    },
  ];
  constructor() {}
  async OnSearchChange(event) {
    this.query = event.detail.value.toLowerCase();
    this.restaurants = [];
    if (this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async () => {
        this.restaurants = await this.allrestaurants.filter((element: any) => {
          return element.short_name.includes(this.query);
        });
        this.isLoading = false;
      }, 3000);
      console.log(this.restaurants);
    }
  }
  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
  }
}
