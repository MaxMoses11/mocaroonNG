import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decoratePhone'
})
export class DecoratePhonePipe implements PipeTransform {

  transform(phone: string): string {
    return phone.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
  }

}
