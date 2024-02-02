import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductType;

  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor() {
    this.product = {
      image: '',
      title: '',
      amount: '',
      price: 0
    }
  }

  ngOnInit(): void {
  }

  addProductToCart(): void {
    this.addToCartEvent.emit(this.product);
  }

}
