import {Component} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {FormValuesType} from "./types/form-values.type";
import {CartService} from "./services/cart.service";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hideCart: boolean = false;
  public phone: string = '375293689868';
  public instagramLink: string = 'https://instagram.com';

  public advantages: AdvantageType[] = [
    {
      title: "Лучшие продукты",
      description: "Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители."
    },
    {
      title: "Много вкусов",
      description: "Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок."
    },
    {
      title: "Бисквитное тесто",
      description: "Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!"
    },
    {
      title: "Честный продукт",
      description: "Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г."
    },
  ];

  public products: ProductType[] = [];

  public formValues: FormValuesType = {
    productTitle: '',
    clientName: '',
    phone: '',
  };

  constructor( public productService: ProductsService,
               public cartService: CartService) {
    this.products = productService.getProducts();
  }

  public scrollTo(element: HTMLElement): void {
    element.scrollIntoView({behavior: "smooth"});
  };

  public addToCart(product: ProductType, element: HTMLElement): void {
    this.scrollTo(element);
    this.formValues.productTitle = product.title.toUpperCase();
    this.cartService.quantity++;
    this.cartService.amount += product.price;
    alert(`${product.title} добавлен в корзину!`);
  };

  public createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Выберите продукт');
      return;
    }
    if (!this.formValues.clientName) {
      alert('Введите ваше имя');
      return;
    }
    if (!this.formValues.phone) {
      alert('Введите номер телефона для связи');
      return;
    }

    alert('Спасибо за заказ!');

    this.formValues = {
      productTitle: '',
      clientName: '',
      phone: '',
    }
  };

  protected readonly CartService = CartService;
}
