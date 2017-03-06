import {Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

@Component({
    selector:'mysecond-form',
    templateUrl:'./model-form.component.html',
    styleUrls:['./model-form.component.css']
})
export class ModelDrivenFormComponent{
    submitted:Boolean;
    login: FormGroup;
    constructor(private formBuilder:FormBuilder){
        this.submitted=false; 
         this.login=this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.minLength(3)],
    });  
    this.login.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
onValueChanged(data?: any) {
    if (!this.login) { return; }
    const form = this.login;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && (control.dirty || control.touched)&& !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
   formErrors = {
    'username': '',
    'password': ''
  };
  validationMessages = {
    'username': {
      'required': 'Name is required.'
    },
    'password': {
      'required': 'maxlength length is 6.'
    }
  };
  onSubmit() {
    this.submitted = true;
  }
    }