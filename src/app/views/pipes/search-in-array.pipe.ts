import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
  {
    name: 'search'
  }
)
export class ToCamelCase implements PipeTransform {

  transform(value:string,arr:Array<any>):Array<any>  {
      
   return arr;
  }
}