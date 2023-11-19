import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  id: string;
  data: any = {};
  items: any[] = [];
  cartData: any[] = [];
  veg: boolean = false;
  restaurants = [
    {
      uid: '12ew',
      address: 'Nagpur',
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
      address: 'Nagpur',

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
      address: 'Nagpur',

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
  categories: any[] = [
    {
      id: 'e00',
      name: 'Italian',
      uid: '12ew',
    },
    {
      id: 'e0',
      name: 'Mexican',
      uid: '123ew',
    },
  ];
  allItems = [
    {
      category_id: 'e00',
      cover:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D',
      desc: 'Great in taste',
      id: 'i1',
      name: 'Pizza',
      price: 120,
      rating: 0,
      status: true,
      uid: '1234ew',
      variation: false,
      veg: false,
    },
    {
      category_id: 'e0',
      cover:
        'https://b.zmtcdn.com/data/pictures/chains/6/19416406/48303b90062da8241db07efefff0bb24.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
      desc: 'Great in taste',
      id: 'i2',
      name: 'Caprese Salad',
      price: 200,
      rating: 0,
      status: true,
      uid: '123ew',
      variation: false,
      veg: true,
    },
    {
      category_id: 'e00',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmh0CU4TMMEbdRmiqXMW8xgl5321MR6GLZA&usqp=CAU',
      desc: 'Great in taste',
      id: 'i3',
      name: 'Pasta',
      price: 150.5,
      rating: 0,
      status: true,
      uid: '12ew',
      variation: false,
      veg: false,
    },
  ];
  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      }
      this.id = paramMap.get('restaurantId');
      console.log('data', this.id);
      this.getItems();
    });
  }

  getItems() {
    this.data = {};
    let data = this.restaurants.filter((x) => x.uid === this.id);
    this.data = data[0];
    this.items = this.allItems.filter((x) => x.uid === this.id);
    this.categories = this.categories.filter((x) => x.uid === this.id);
    console.log(this.items, this.id);
  }

  getCuisine(cuisine) {
    return cuisine.join(', ');
  }
  vegOnly(e) {
    console.log(e.detail.checked);
  }
  quantityPlus(item, index) {
    try {
      console.log(item[index], 'Items');
    } catch (e) {}
  }
  quantityMinus(item, index) {}
}
