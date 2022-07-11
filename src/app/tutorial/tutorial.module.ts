import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DropContainerComponent } from './components/drop-container/drop-container.component';


@NgModule({
  declarations: [
    HomeComponent,
    DropContainerComponent
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule
  ]
})
export class TutorialModule { }
