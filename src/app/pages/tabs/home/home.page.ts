import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  banners: any[] = [];
  constructor() {}

  ngOnInit() {
    this.banners = [
      { banner: 'assets/images/food1.jpg' },
      { banner: 'assets/images/food2.jpg' },
      { banner: 'assets/images/food3.jpg' },
    ];
    console.log(this.banners);
  }
}
