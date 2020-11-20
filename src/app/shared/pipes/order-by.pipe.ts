import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: Array<any>, fieldName: string, asc: boolean = false): Array<any> {
    const fields = fieldName.split(',');
    return array.sort((a, b) => {
        const aValue = fields.reduce((res, f) => res[f], a);
        const bValue = fields.reduce((res, f) => res[f], b);
        const order = asc ? 1 : -1;
        return (aValue > bValue)
          ? order
          : ((bValue > aValue)
            ? -order
            : 0);
      }
    );
  }
}
