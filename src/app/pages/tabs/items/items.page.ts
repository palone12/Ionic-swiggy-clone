import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  id: any;
  data: any = {};
  items: any[] = [];
  cartData: any = {};
  veg: boolean = false;
  storedData: any = {};
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
      uid: '12ew',
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
      uid: '12ew',
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
      uid: '12ew',
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
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router
  ) {}

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
    console.log(this.items, 'ITEMEMEM');
  }

  getCart() {
    return Preferences.get({ key: 'cart' });
  }

  async getItems() {
    this.data = {};
    this.cartData = {};
    this.storedData = {};
    let data = this.restaurants.filter((x) => x.uid === this.id);
    this.data = data[0];
    this.items = this.allItems.filter((x) => x.uid === this.id);
    this.categories = this.categories.filter((x) => x.uid === this.id);
    console.log(this.items, this.id);
    let cart: any = await this.getCart();
    console.log('cart: ', cart);
    if (cart?.value) {
      this.storedData = JSON.parse(cart.value);
      console.log('storedData: ', this.storedData);
      if (
        this.id == this.storedData.restaurant.uid &&
        this.allItems.length > 0
      ) {
        this.allItems.forEach((element: any) => {
          this.storedData.items.forEach((ele) => {
            if (element.id != ele.id) return;
            element.quantity = ele.quantity;
          });
        });
      }
      this.cartData.totalItem = this.storedData.totalItem;
      this.cartData.totalPrice = this.storedData.totalPrice;
    }
  }

  getCuisine(cuisine) {
    return cuisine.join(', ');
  }
  vegOnly(e) {
    this.items = [];
    if (e.detail.checked == true) {
      this.items = this.allItems.filter((x) => x.veg === true);
    } else {
      this.items = this.allItems;
    }
  }
  quantityPlus(item, index) {
    try {
      if (!this.items[index].quantity || this.items[index].quantity == 0) {
        this.items[index].quantity = 1;
        this.calculate();
      } else {
        this.items[index].quantity += 1;
        this.calculate();
      }
    } catch (e) {
      console.log(e);
    }
  }
  quantityMinus(item, index) {
    if (this.items[index].quantity !== 0) {
      this.items[index].quantity -= 1;
    } else {
      this.items[index].quantity = 0;
    }
    this.calculate();
  }
  calculate() {
    this.cartData.items = [];
    let item = this.items.filter((x) => x.quantity > 0);
    this.cartData.items = item;
    this.cartData.totalPrice = 0;
    this.cartData.totalItem = 0;
    item.forEach((element) => {
      this.cartData.totalItem += element.quantity;
      this.cartData.totalPrice +=
        parseFloat(element.price) * parseFloat(element.quantity);
    });
    this.cartData.totalPrice = parseFloat(this.cartData.totalPrice).toFixed(2);
    if (this.cartData.totalItem == 0) {
      this.cartData.totalItem = 0;
      this.cartData.totalPrice = 0;
    }
  }

  async viewCart() {
    if (this.cartData.items && this.cartData.items.length > 0) {
      await this.saveToCart();
      this.router.navigate([this.router.url + '/cart']);
    }
  }
  async saveToCart() {
    try {
      this.cartData.restaurant = {};
      this.cartData.restaurant = this.data;
      console.log('cartData', this.cartData);
      await Preferences.set({
        key: 'cart',
        value: JSON.stringify(this.cartData),
      });
    } catch (e) {
      console.log(e);
    }
  }
}
