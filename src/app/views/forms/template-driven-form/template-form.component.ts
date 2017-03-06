import {Component} from '@angular/core';

@Component({
    selector:'my-form',
    templateUrl:'./template-form.component.html',
    styleUrls:['./template-form.component.scss']
})
export class TemplateDrivenFormComponent{
    submitted:Boolean;
    constructor(){
        this.submitted=false;        
    }
     myForm(e){
         this.submitted=true;
        console.log("Username and password is sent to the server for verification");
        console.log(e.target);
        
    }
}