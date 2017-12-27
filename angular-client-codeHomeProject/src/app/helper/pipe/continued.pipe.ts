import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continued'
})
export class ContinuedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
