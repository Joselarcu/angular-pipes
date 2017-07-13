import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, enable: boolean = true): string {
    let textLength = value.length;
    let result: string = "";
    if(enable){
	    for(let i=0;i<textLength;i++){
	    	result += "*";
	    }
	    return result;
    }
    else{
    	return value;
    }
  }

}
