import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
  {
    name: 'toCamelCase'
  }
)
export class ToCamelCase implements PipeTransform {

  transform(value:string):string  {
    var splittedArray =value.split(" "),
    len,
    newArray=[],
    j=0,
    newStr,
    i,
    firstCharacter;

    len=splittedArray.length;
    firstCharacter = splittedArray[0].charAt(0);

    if(firstCharacter===firstCharacter.toUpperCase()){
      firstCharacter=firstCharacter.toLowerCase();
    }

    for(i=1;i<len;i++){
      firstCharacter=splittedArray[i].charAt(0);
      firstCharacter.toUpperCase();
      newArray[j++]=splittedArray[i];
    }
    newStr=newArray[0];
    for(i=1;i<j;i++){
      newStr+=newArray[i];
    }
    return newStr;
  }
}