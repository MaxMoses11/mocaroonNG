import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public quantity: number = 0;
  public amount: number = 0;

  constructor() {
  }
}
