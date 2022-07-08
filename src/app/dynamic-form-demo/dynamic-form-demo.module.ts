import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormDemoRoutingModule } from './dynamic-form-demo-routing.module';
import { FormModule as DynamicFormModule } from 'dynamic-form/form';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        DynamicFormDemoRoutingModule,
        DynamicFormModule
    ]
})
export class DynamicFormDemoModule { }
