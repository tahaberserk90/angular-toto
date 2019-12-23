import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkmarket'
})
export class CheckmarketPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let ret:string='\u2718';
    if(value)
      ret='\u2713'
    return ret;
  }

}
