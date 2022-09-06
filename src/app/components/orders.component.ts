import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { orderItems } from '../model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Output()
  addItemsToCart = new Subject<orderItems>()

  orderForm!: FormGroup


  constructor(private fb: FormBuilder) {
    console.info('>>> fb: ', fb)
   }

  ngOnInit(): void {
    this.orderForm = this.createForm()
  }

  private createForm(): FormGroup{
    return this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      price: this.fb.control('', [Validators.required]),
      quantity: this.fb.control('', [Validators.min(1)])
    });
  }

  addToCart(){
    console.info('Item added to cart')
    const items: orderItems = this.orderForm.value as orderItems
    console.info('addToCart >>>: ', this.orderForm.value)
    this.addItemsToCart.next(items)
    this.orderForm.reset()
  }

}
