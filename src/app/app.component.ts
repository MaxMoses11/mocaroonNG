import {Component} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {FormValuesType} from "./types/form-values.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hidePresent: boolean = false;
  public phone: string = '+375 (29) 368-98-68';
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

  public products: ProductType[] = [
    {
      image: 'prod1.png',
      title: 'Макарун с малиной',
      amount: '1',
      prise: '1,7',
    },
    {
      image: 'prod2.png',
      title: 'Макарун с манго',
      amount: '1',
      prise: '1,7',
    },
    {
      image: 'prod3.png',
      title: 'Макарун с ванилью',
      amount: '1',
      prise: '1,7',
    },
    {
      image: 'prod4.png',
      title: 'Макарун с фисташками',
      amount: '1',
      prise: '1,7',
    },
  ];

  public formValues: FormValuesType = {
    productTitle: '',
    clientName: '',
    phone: '',
  };

  public scrollTo(element: HTMLElement): void {
    element.scrollIntoView({behavior: "smooth"});
  };

  public addToCart(product: ProductType, element: HTMLElement): void {
    this.scrollTo(element);
    this.formValues.productTitle = product.title.toUpperCase();
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
}
