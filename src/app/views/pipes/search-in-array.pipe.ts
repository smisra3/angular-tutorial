import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
  {
    name: 'search'
  }
)
export class Search implements PipeTransform {

  transform(value:string,arr:Array<string>):Array<string>  {
    
    var reg=new RegExp(value),
     filteredArray=[];
  
     filteredArray=arr.filter(function(element){
       if(reg.test(element)){
         return true;
       }
       else{
         return false;
       }
     })

   return filteredArray;
  }
}