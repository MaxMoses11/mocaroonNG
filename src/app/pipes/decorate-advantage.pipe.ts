import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decorateAdvantage'
})
export class DecorateAdvantagePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 95) {
      return value.slice(0, 95) + '...';
    } else {
      return value;
    }

  }

}
