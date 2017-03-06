import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { HomeComponent } from './home/home.component';
import {TemplateDrivenFormComponent} from './template-driven-form/template-form.component';
import {ModelDrivenFormComponent} from './model-driven-form/model-driven-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule
  ],
  exports:[HomeComponent,TemplateDrivenFormComponent,ModelDrivenFormComponent],
  declarations: [HomeComponent,TemplateDrivenFormComponent,ModelDrivenFormComponent]
})
export class FormModule { }
