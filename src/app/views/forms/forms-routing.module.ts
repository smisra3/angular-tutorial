import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {TemplateDrivenFormComponent} from './template-driven-form/template-form.component';
import {ModelDrivenFormComponent} from './model-driven-form/model-driven-form.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'template',
    pathMatch: 'full'
  }, {
    path: 'template',
    component: TemplateDrivenFormComponent
  },{
    path:'model',
    component:ModelDrivenFormComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormsRoutingModule { }
