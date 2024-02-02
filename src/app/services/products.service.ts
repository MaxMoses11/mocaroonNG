import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): ProductType[] {
    return [
      {
        image: 'prod1.png',
        title: 'Макарун с малиной',
        amount: '1',
        price: 1.7,
      },
      {
        image: 'prod2.png',
        title: 'Макарун с манго',
        amount: '1',
        price: 1.7,
      },
      {
        image: 'prod3.png',
        title: 'Макарун с ванилью',
        amount: '1',
        price: 1.7,
      },
      {
        image: 'prod4.png',
        title: 'Макарун с фисташками',
        amount: '1',
        price: 1.7,
      },
    ];
  }

}
