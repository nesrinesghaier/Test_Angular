import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(country: any, term?: any): any {
    if(term===undefined) return country;
    return country.filter(function (country) {
      return country.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
