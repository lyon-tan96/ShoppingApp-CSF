import { Component } from '@angular/core';
import { orderItems } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingApp';

  cart: orderItems[] = [];

  newItems(newItem: orderItems){
    console.info('>>> new order items: ', newItem)
    this.cart = [... this.cart, newItem]
    console.info(this.cart)
  }

  itemDeleted(idx:number) {
    const tmp: orderItems[]= [... this.cart]
    tmp.splice(idx,1)
    this.cart = tmp
  }
}
