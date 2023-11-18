import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  banners: any[] = [];
  restuarants: any[];
  isLoading: boolean = false;
  constructor() {}

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.banners = [
        { banner: 'assets/images/food1.jpg' },
        { banner: 'assets/images/food2.jpg' },
        { banner: 'assets/images/food3.jpg' },
      ];
      console.log(this.banners);
      this.restuarants = [
        {
          uid: '12ew',
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
          uid: '123ew',
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
          uid: '1234ew',
          cover:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHm18IGPgsY84_ob-qzQ7Z3OcCZOmtBoUKA&usqp=CAU',
          name: 'Anna Saoji',
          short_name: 'Ramu Kaka',
          cuisines: ['Indian'],
          rating: 5,
          delivery_time: 5.5,
          distance: 5,
          price: 100,
        },
      ];
      this.isLoading = false;
    }, 3000);
  }
}
