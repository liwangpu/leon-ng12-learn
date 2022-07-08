import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormDemoRoutingModule } from './dynamic-form-demo-routing.module';
import { FormModule as DynamicFormModule } from 'dynamic-form/form';
import { FormDetailComponent } from './components/form-detail/form-detail.component';

@NgModule({
    declarations: [
    FormDetailComponent
  ],
    imports: [
        CommonModule,
        DynamicFormDemoRoutingModule,
        DynamicFormModule
    ]
})
export class DynamicFormDemoModule { }
