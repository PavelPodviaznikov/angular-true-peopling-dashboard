import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( user => {
      return (
        user.fullName.toLowerCase().includes(searchText) ||
        user.role.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText)
      );
    });
   }
}
