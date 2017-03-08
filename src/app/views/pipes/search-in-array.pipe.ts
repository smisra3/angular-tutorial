import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
  {
    name: 'search'
  }
)
export class Search implements PipeTransform {

  transform(value:string,arr:Array<string>):Array<string>  {

   return arr;
  }
}